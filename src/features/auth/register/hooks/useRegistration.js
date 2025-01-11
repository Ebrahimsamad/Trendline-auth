import { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext.jsx";
import { registrationSchema } from "../schemas/registrationSchema";
import { API_ENDPOINT, CLIENT_TYPES } from "../constants";

export const useRegistration = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [apiError, setApiError] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: joiResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      mobile_country_code: "",
      mobile: "",
      client_type: CLIENT_TYPES.MY_COMPANY,
      issuing_authority: "",
      company_name: "",
      commercial_license_number: "",
    },
  });

  const clientType = watch("client_type");

  const onSubmit = async (data) => {
    try {
      setApiError(null);

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        // Handle non-JSON response
        const textError = await response.text();
        console.error("Non-JSON response:", textError);
        setApiError("Server error occurred. Please try again later.");
        return;
      }

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.errors) {
          Object.entries(responseData.errors).forEach(([field, messages]) => {
            const message = Array.isArray(messages) ? messages[0] : messages;

            if (field === "mobile" && message.includes("exists")) {
              setError("mobile", {
                type: "manual",
                message: "This mobile number is already registered",
              });
            } else if (field === "email" && message.includes("exists")) {
              setError("email", {
                type: "manual",
                message: "This email is already registered",
              });
            } else {
              setError(field, {
                type: "manual",
                message: message,
              });
            }
          });
        } else if (responseData.message) {
          setApiError(responseData.message);
        } else {
          setApiError("Registration failed. Please try again.");
        }
        return;
      }

      await login(responseData);
      navigate("/test-auth");
    } catch (error) {
      console.error("Registration error:", error);
      if (error.name === "SyntaxError") {
        setApiError("Unable to connect to the server. Please try again later.");
      } else {
        setApiError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    apiError,
    isSubmitting,
    clientType,
    showPassword,
    showConfirmPassword,
    setShowPassword,
    setShowConfirmPassword,
    onSubmit,
  };
};

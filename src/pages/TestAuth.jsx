import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TestAuth = () => {
  const { user, logout } = useAuth();
  const [showContent, setShowContent] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 200); // Slight delay for smoother effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      dir={i18n.dir()}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center py-12 px-6 lg:px-8"
    >
      {/* Outer Wrapper */}
      <div
        className={`max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 transform transition-all duration-700 ease-out ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header Section */}
        <div className="border-b pb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {t("auth.welcome", { name: user?.data?.name })}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            {t("auth.role", { role: user?.data?.type })}
          </p>
        </div>

        {/* User Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Email */}
          <div className="group flex flex-col bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h3 className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
              {t("auth.email")}
            </h3>
            <p className="text-gray-900 text-lg font-semibold">
              {user?.data?.email}
            </p>
          </div>

          {/* Phone */}
          <div className="group flex flex-col bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h3 className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
              {t("auth.phone")}
            </h3>
            <p className="text-gray-900 text-lg font-semibold">
              {user?.data?.mobile_country_code} {user?.data?.mobile}
            </p>
          </div>

          {/* Email Verification */}
          <div className="group flex flex-col bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h3 className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
              {t("auth.email_verification")}
            </h3>
            <p
              className={`text-lg font-semibold ${
                user?.data?.email_verified_at
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {user?.data?.email_verified_at
                ? t("auth.verified")
                : t("auth.not_verified")}
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={logout}
            className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 overflow-hidden group transition-all duration-300 ease-in-out"
          >
            <span className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
            <span className="relative z-10">{t("auth.logout")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestAuth;

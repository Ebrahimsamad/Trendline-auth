import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import TestAuth from "./pages/TestAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import RegistrationForm from "./features/auth/register/components/RegistrationForm";
import LoginForm from "./features/auth/login/components/LoginForm";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route
              path="/test-auth"
              element={
                <ProtectedRoute>
                  <TestAuth />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<LoginForm />} />

            <Route
              path="*"
              element={
                <ProtectedRoute>
                  <LoginForm />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;

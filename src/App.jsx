import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import TestAuth from "./pages/TestAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import RegistrationForm from "./features/auth/register/components/RegistrationForm";
import LoginForm from "./features/auth/login/components/LoginForm";
import PublicRoute from "./components/PublicRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginForm />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegistrationForm />
              </PublicRoute>
            }
          />

          <Route
            path="/test-auth"
            element={
              <ProtectedRoute>
                <TestAuth />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <PublicRoute>
                <h1>Welcome to Public Home Page</h1>
              </PublicRoute>
            }
          />

          <Route
            path="*"
            element={
              <ProtectedRoute>
                <h1>Welcome to Public Home Page</h1>
                <h1>Page Not Found</h1>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

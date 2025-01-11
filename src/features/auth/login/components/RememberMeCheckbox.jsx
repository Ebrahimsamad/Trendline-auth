import { Link } from "react-router-dom";

export const RememberMeCheckbox = ({ checked, onChange }) => (
  <div className="flex items-center justify-between mt-1">
    <div className="flex items-center">
      <input
        id="remember-me"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
      />
      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
        Remember Me
      </label>
    </div>
    <div className="text-sm">
      <Link
        to="/forgot-password"
        className="font-medium text-purple-600 hover:text-purple-500"
      >
        Forgot Password?
      </Link>
    </div>
  </div>
);

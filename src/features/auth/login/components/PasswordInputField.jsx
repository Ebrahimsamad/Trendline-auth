import { Eye, EyeOff } from "lucide-react";

export const PasswordInputField = ({
  value,
  onChange,
  showPassword,
  onTogglePassword,
}) => (
  <div className="relative">
    <label
      htmlFor="password"
      className="block text-left text-sm font-medium text-gray-700"
    >
      Password
    </label>
    <div className="mt-1 relative">
      <input
        id="password"
        name="password"
        type={showPassword ? "text" : "password"}
        required
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
        placeholder="••••••••••••"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center"
        onClick={onTogglePassword}
      >
        {showPassword ? (
          <EyeOff className="h-5 w-5 text-gray-400" />
        ) : (
          <Eye className="h-5 w-5 text-gray-400" />
        )}
      </button>
    </div>
  </div>
);

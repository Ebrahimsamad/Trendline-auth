import { Eye, EyeOff } from "lucide-react";

export const PasswordInput = ({
  id,
  label,
  showPassword,
  toggleShow,
  register,
  error,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-left text-sm font-medium text-gray-700"
    >
      {label}
    </label>
    <div className="mt-1 relative">
      <input
        id={id}
        type={showPassword ? "text" : "password"}
        {...register(id)}
        className={`block w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
        placeholder="••••••••••••"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center"
        onClick={toggleShow}
      >
        {showPassword ? (
          <EyeOff className="h-5 w-5 text-gray-400" />
        ) : (
          <Eye className="h-5 w-5 text-gray-400" />
        )}
      </button>
    </div>
    {error && (
      <p className="mt-2 text-sm text-red-600 text-left">{error.message}</p>
    )}
  </div>
);

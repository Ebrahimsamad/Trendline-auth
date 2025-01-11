export const FormInput = ({
  id,
  label,
  type = "text",
  error,
  register,
  placeholder,
  className = "",
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-start text-sm font-medium text-gray-700"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      {...register(id)}
      className={`mt-1 block w-full px-3 py-2 border ${
        error ? "border-red-500" : "border-gray-300"
      } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 ${className}`}
      placeholder={placeholder}
    />
    {error && (
      <p className="mt-2 text-sm text-red-600 text-start">{error.message}</p>
    )}
  </div>
);

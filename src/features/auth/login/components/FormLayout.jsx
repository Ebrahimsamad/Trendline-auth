export const FormLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-50 flex">
    <div className="hidden lg:flex lg:w-1/2 bg-purple-50 items-center justify-center p-12">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <img src="/login-s.png" alt="Login illustration" className="relative" />
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
      {children}
    </div>
  </div>
);

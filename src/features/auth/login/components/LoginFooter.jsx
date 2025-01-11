import { Link } from "react-router-dom";

export const LoginFooter = () => (
  <div className="mt-6 text-center text-sm">
    <span className="text-gray-600">Made with</span>
    <span className="text-red-500 mx-1">❤</span>
    <span className="text-gray-600">by</span>
    <Link
      to="/"
      className="font-medium text-purple-600 hover:text-purple-500 ml-1"
    >
      Trend line
    </Link>
  </div>
);

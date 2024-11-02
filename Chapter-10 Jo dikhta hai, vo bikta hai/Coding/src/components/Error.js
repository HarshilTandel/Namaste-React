import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-md max-w-md">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!!!!</h1>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Error {error.status}: {error.statusText}
        </h3>
        <p className="text-gray-600 mb-6">
          Something went wrong! Please try again later.
        </p>
        <a
          href="/"
          className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Error;

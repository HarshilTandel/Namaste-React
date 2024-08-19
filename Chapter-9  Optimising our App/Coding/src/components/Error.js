import { useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">Oops!!!!</h1>
        <h3 className="error-status">
          Error {error.status}: {error.statusText}
        </h3>
        <p className="error-description">
          Something went wrong! Please try again later.
        </p>
        <a href="/" className="error-button">Go Home</a>
      </div>
    </div>
  );
};

export default Error;

import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  
  return (
    <div>
      <h2>Oops!!!!</h2>
      <h3>Error {error.status}: {error.statusText}</h3>
    </div>
  );
};

export default Error;

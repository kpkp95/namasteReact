import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Ooops!!!</h1>
      <h1>Something went wrong!!!</h1>
      <h2>{err.status}</h2>
    </div>
  );
};

export default Error;

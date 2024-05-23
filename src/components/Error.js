import { useRouteError } from "react-router-dom";

const Error = () => {
  const routerError = useRouteError();
  console.log(routerError);
  return (
    <div>
      <h2>Oopss!!</h2>
      <h2>{routerError.data}</h2>
    </div>
  );
};

export default Error;

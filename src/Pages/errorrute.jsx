import React from "react";
import { useRouteError } from "react-router-dom";
const Errorrute = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center h-screen items-center  bg-red-300">
      <h1 className="text-3xl font-bold">Ooops!</h1>
      <p className="text-xl my-2">Sorry there's might be error</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default Errorrute;

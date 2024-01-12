import React from "react";
import { Link } from "react-router-dom";

const Loginlayout = (props) => {
  const { children, title1, title2, kalimat, type } = props;
  return (
    <div className="flex items-center justify-center h-screen bg-red-300">
      <div className="w-full max-w-sm bg-rose-900 bg-opacity-75 p-10 rounded-lg border-solid border-2 shadow-lg">
        <h1 className="text-slate-950 text-3xl font-bold">
          <span className="text-red-500">{title1}</span>
          <span className="text-stone-900">{title2}</span>
        </h1>
        <p className="font-medium text-slate-800 mt-3 mb-2">{kalimat}</p>
        {children}
        <p className="flex  justify-center mt-3">
          {type === "login" ? "Don't Have an Account?" : "Already Have an Account?"}
          {type === "login" && (
            <Link to="/Reg" className="font-bold ml-1 text-red-500 ">
              Register Now!
            </Link>
          )}
          {type === "register" && (
            <Link to="/Sign" className="font-bold ml-1 text-red-500 ">
              Sign In Now!
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default Loginlayout;

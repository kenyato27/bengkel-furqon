import React from "react";

const Input = (props) => {
  const { tipe, tekspembantu, name } = props;
  return <input type={tipe} placeholder={tekspembantu} name={name} id={name} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />;
};
export default Input;

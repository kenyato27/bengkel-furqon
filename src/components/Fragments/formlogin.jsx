import React from "react";
import Baginput from "../Elements/Input";
import Tombol from "../Elements/Buttons";

const Formlogin = () => {
  const Handlelogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/Products";
  };
  return (
    <form onSubmit={Handlelogin}>
      <Baginput hmtlbaru="email" children="Email" buram="example@email.com" tipebaru="text" nama="email"></Baginput>
      <Baginput hmtlbaru="password" children="Password" buram="*********" tipebaru="password" nama="password"></Baginput>
      <Tombol tip="submit">BEGIN</Tombol>
    </form>
  );
};

export default Formlogin;

import React from "react";
import Baginput from "../Elements/Input";
import Tombol from "../Elements/Buttons";

const Formregister = () => {
  return (
    <form action="">
      <Baginput hmtlbaru="Username" children="Nickname" buram="Masukkan Nickname" tipebaru="text" nama="Username"></Baginput>
      <Baginput hmtlbaru="email" children="Email" buram="example@email.com" tipebaru="text" nama="email"></Baginput>
      <Baginput hmtlbaru="password" children="Password" buram="*********" tipebaru="password" nama="password"></Baginput>
      <Baginput hmtlbaru="confirmpassword" children="Confirm Password" buram="*********" tipebaru="password" nama="confirmpassword"></Baginput>
      <Tombol tip="submit">CREATE ME</Tombol>
    </form>
  );
};

export default Formregister;

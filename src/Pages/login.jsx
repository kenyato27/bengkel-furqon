import React from "react";
import Loginlayout from "../components/Layout/auntenthication";
import Formlogin from "../components/Fragments/formlogin";

const Loginpage = () => {
  return (
    <Loginlayout title1="LoG" title2="IN" kalimat="Silahkan Masukkan Email dan Password anda" type="login">
      <Formlogin></Formlogin>
    </Loginlayout>
  );
};

export default Loginpage;

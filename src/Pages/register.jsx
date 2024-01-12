import React from "react";
import Loginlayout from "../components/Layout/auntenthication";
import Formregister from "../components/Fragments/formregister";

const Registerpage = () => {
  return (
    <Loginlayout title1="Register" kalimat="Silahkan Masukkan data diri anda" type="register">
      <Formregister></Formregister>
    </Loginlayout>
  );
};

export default Registerpage;

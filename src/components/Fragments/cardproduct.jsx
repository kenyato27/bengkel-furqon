import React from "react";
import Tombol from "../Elements/Buttons";
const Cardproduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-sm bg-white rounded-lg shadow mx-5 dark:bg-red-500 my-5">{children}</div>;
};

const Header = (props) => {
  const { gambar } = props;
  return (
    <a href="#">
      <img src={gambar} alt="product" className="p-8 rounded-lg"></img>
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5">
      <a href="">
        <h1 className="text-2xl text-neutral-100 font-bold tracking-tight">{title}</h1>
        <p className="text-neutral-100 text-wrap">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="items-center justify-between px-5 ">
      <span className="text-neutral-100 text-2xl font-semibold">{price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</span>
      <Tombol children="Checkout" namastyle="w-full px-4 py-2 mt-4 mb-4 text-white bg-blue-600 rounded-md hover:bg-blue-700" />
    </div>
  );
};
export default Cardproduct;

Cardproduct.Header = Header;
Cardproduct.Body = Body;
Cardproduct.Footer = Footer;

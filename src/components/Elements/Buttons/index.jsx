const Tombol = (props) => {
  const { tip = "button", children, pencet = () => {}, namastyle = "w-full px-4 py-2 mt-4 text-white bg-red-500 rounded-md border border-transparent hover:border-black hover:border-solid hover:border-4 hover:text-black" } = props;
  return (
    <button type={tip} className={namastyle} onClick={pencet}>
      {children}
    </button>
  );
};
export default Tombol;

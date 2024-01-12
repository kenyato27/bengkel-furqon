const Label = (props) => {
  const { hmtl, children } = props;
  return (
    <label htmlFor={hmtl} className="text-slate-800 font-semibold">
      {children}
    </label>
  );
};
export default Label;

import Label from "./Label";
import Input from "./Input";

const Baginput = (props) => {
  const { children, tipebaru, buram, hmtlbaru, nama } = props;
  return (
    <div className="mt-3 mb-2">
      <Label hmtl={hmtlbaru}>{children}</Label>
      <Input tipe={tipebaru} tekspembantu={buram} name={nama}></Input>
    </div>
  );
};
export default Baginput;

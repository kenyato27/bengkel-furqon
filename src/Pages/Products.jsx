import Cardproduct from "../components/Fragments/cardproduct";
import Tombol from "../components/Elements/Buttons";

const products = [
  {
    No: 1,
    gambar: "/images/jasaGambarTeknik.jpg",
    title: "Jasa Gambar Teknik",
    price: 150000,
    Deskripsi: `lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, non. Accusamus consequuntur magnam quas commodi odio eligendi nemo tenetur recusandae praesentium esse! Maiores, aliquam tempore. Inventore facere aperiam itaque
    voluptates eius repellendus provident eveniet autem?`,
  },
  {
    No: 2,
    gambar: "/images/jasaCoding.jpg",
    title: "Jasa Coding",
    price: 200000,
    Deskripsi: `lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, non. Accusamus consequuntur magnam quas commodi odio eligendi nemo tenetur recusandae praesentium esse! Maiores, aliquam tempore. Inventore facere aperiam itaque
    voluptates eius repellendus provident eveniet autem?`,
  },
  {
    No: 3,
    gambar: "/images/jasaOtomat2.jpg",
    title: "Jasa Otomatisasi",
    price: 500000,
    Deskripsi: `lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, non. Accusamus consequuntur magnam quas commodi odio eligendi nemo tenetur recusandae praesentium esse! Maiores, aliquam tempore. Inventore facere aperiam itaque
    voluptates eius repellendus provident eveniet autem?`,
  },
];

const storage = localStorage.getItem("email");

const Productspage = () => {
  const handlelogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/Sign";
  };
  return (
    <>
      <div className="bg-red-500 flex flex-row justify-end font-bold text-slate-950 h-20 items-center px-10 ">
        {storage}
        <Tombol namastyle=" mx-3 h-10 px-6 rounded-md bg-amber-900 text-black" pencet={handlelogout}>
          Sign Out
        </Tombol>
      </div>
      <div className="flex justify-center py-5 ">
        <div className="w-3/4 flex flex-wrap ">
          {products.map((product) => (
            <Cardproduct key={product.No}>
              <Cardproduct.Header gambar={product.gambar} />
              <Cardproduct.Body title={product.title}>{product.Deskripsi}</Cardproduct.Body>
              <Cardproduct.Footer price={product.price} />
            </Cardproduct>
          ))}
        </div>
      </div>
    </>
  );
};

export default Productspage;

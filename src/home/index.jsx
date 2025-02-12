import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../components/loading";
import { MdOutlineStarPurple500 } from "react-icons/md";

function Home() {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        const res = await axios.get("http://localhost:5000/products");
        setProducts(res.data.data);
      } catch (err) {
        console.log(err.message);

        setErrorMsg(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, []);

  return (
    <>
      <h2 className="text-center text-2xl font-bold py-[20px]">Home</h2>
      <div className="grid grid-cols-4 w-[1000px]  pb-[20px] m-auto  gap-[15px]">
        {errorMsg && (
          <div className="text-red-600 text-2xl text-center font-bold">
            {errorMsg}
          </div>
        )}
        {isLoading && <Loading />}
        {products.map((item) => (
          <div
            key={item.id}
            className="border text-star  overflow-hidden rounded-[15px] font-bold">
            <img className="w-[100%] border-b" src={item.image} alt="" />
            <h1 className="my-[10px] ml-[10px]">{item.name}</h1>
            <h1 className="my-[10px] ml-[15px] pl-[10px] bg-amber-300 w-[90px]">{item.price}$</h1>
            <div className="flex mx-[10px] my-[10px]">
            {item.rating}
            <h1 className="text-start"></h1>
            <button className="ml-[5px]"><MdOutlineStarPurple500 /></button>
            </div>
            </div>
        ))}
      </div>
    </>
  );
}

export default Home;

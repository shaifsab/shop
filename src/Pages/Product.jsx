import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../Slices/ProductSlices";

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://api.jsonbin.io/v3/b/6688405ae41b4d34e40d983b')
      .then((res) => setProducts(res.data.record))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleShow = (product) => {
    navigate('/description');
    dispatch(incrementByAmount(product));
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="main container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-3">
          {products.map((item, i) => (
            <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg bg-[#F9E2AF]">
              <div className="card_img w-full h-60 bg-gray-200 flex items-center justify-center">
                <img src={item.photo_url} alt={item.name} className="object-contain h-full" />
              </div>
              <div className="px-6 py-4 flex flex-col items-start">
                <div className="title text-black text-lg font-semibold mt-3">{item.brand}</div>
                <ul className="list-disc pl-5 mt-4">
                  <li>Id: {item.id}</li>
                  <li>Name: {item.name}</li>
                  <li>Type: {item.type}</li>
                  <li>Color: {item.color}</li>
                  <li>Stock: {item.stock}</li>
                </ul>
                <div className="text-lg text-orange-500 mt-4 font-bold">Price: {item.price}</div>
                <button
                  onClick={() => handleShow(item)}
                  className="text-xl text-white font-bold bg-gray-800 w-full p-2 rounded-md mt-3 hover:bg-[#4B70F5] ">
                  Show More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;

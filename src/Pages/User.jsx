import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function calculatePriceWithVAT(price, vatRate = 0.15) {
  return price * (1 + vatRate);
}

const User = () => {
  const product = useSelector((state) => state.counter.value);
  const navigate = useNavigate();

  const [price, setPrice] = useState(product.price || 0);
  const [priceWithVAT, setPriceWithVAT] = useState(calculatePriceWithVAT(product.price || 0));
  const vatRate = 0.15;

  useEffect(() => {
    const newPriceWithVAT = calculatePriceWithVAT(price, vatRate);
    setPriceWithVAT(newPriceWithVAT);
  }, [price]);

  const handlePriceChange = (event) => {
    setPrice(parseFloat(event.target.value) || 0);
  };

  const handleButton = () => {
    navigate('/confirm');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="bg-[#F9E2AF] min-h-screen flex justify-center items-center">
      <div className="main w-full max-w-4xl h-[400px] p-6 rounded-lg bg-white flex shadow-xl gap-12 mb-8">
        <div className="productImg w-[300px] h-[200px] shadow-md mt-6">
          <img src={product.photo_url} alt="product img" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="description flex flex-col gap-5 flex-grow">
          <h2 className="text-lg font-bold">{product.description}</h2>
          <h2 className="text-lg font-bold">Color: {product.color}</h2>
          <h2 className="text-lg font-bold">Brand: {product.brand}</h2>
          <h2 className="text-lg font-bold">Material: {product.material}</h2>
          <div className="flex flex-col gap-3">
            <label className="text-lg font-bold" htmlFor="price">Price: </label>
            <input
              className="text-lg font-bold border border-gray-300 rounded-md p-2"
              type="number"
              id="price"
              value={price}
              onChange={handlePriceChange}
            />
            <p className="text-lg font-bold">Price with 15% VAT: {priceWithVAT.toFixed(2)}</p>
          </div>
          <div className="flex gap-7 mt-4">
            <button
              onClick={handleButton}
              className="w-[200px] p-3 bg-blue-500 text-white rounded-md text-lg font-semibold hover:bg-blue-600 hover:text-white active:bg-blue-700 active:text-white"
            >
              Confirm
            </button>
            <button
              onClick={handleBack}
              className="w-[200px] p-3 bg-gray-700 text-white rounded-md text-lg font-semibold hover:bg-gray-800 hover:text-white active:bg-gray-900 active:text-white"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

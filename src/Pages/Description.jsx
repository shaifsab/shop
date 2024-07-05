import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementByAmount } from "../Slices/ProductSlices";

const Description = () => {
  const product = useSelector((state) => state.counter.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBuy = (buy) => {
    navigate('/user');
    dispatch(incrementByAmount(buy));
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/2">
              <img
                src={product.photo_url}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl text-gray-700 mb-4">{product.description}</p>
              <p className="text-2xl text-red-600 font-semibold mb-4">
                Price: {product.price}
              </p>
              <p className="text-lg text-green-500 font-medium mb-4">
                {product.availability ? "In Stock" : "Out of Stock"}
              </p>

              {/* Additional Details */}
              <div className="mb-4">
                <p className="text-lg text-gray-700 mb-2">Color: {product.color}</p>
                <p className="text-lg text-gray-700 mb-2">Material: {product.material}</p>
                <p className="text-lg text-gray-700 mb-2">Stock: {product.stock}</p>
                <p className="text-lg text-gray-700 mb-2">Rating: {product.rating}/5</p>
                <p className="text-lg text-gray-700 mb-2">Dimensions: {product.dimensions}</p>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleBuy(product)}
                className="text-xl text-white font-bold bg-blue-600 w-full md:w-auto px-4 py-2 rounded-md hover:bg-blue-700 active:bg-blue-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;

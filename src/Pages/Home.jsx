import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://api.jsonbin.io/v3/b/6688405ae41b4d34e40d983b')
      .then((res) => setProducts(res.data.record))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className="bg-[#F9E2AF] min-h-screen">
        <div className="banner h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
          <div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
            <h1 className="text-white text-4xl">Welcome to Furniture Store</h1>
          </div>
        </div>
        <div className="container mx-auto py-8">
          <h2 className="text-4xl font-bold mb-4 text-center">All Products</h2>
          <div className="main grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-3">
            {products.map((item, i) => (
              <div key={i} className="max-w-md rounded overflow-hidden shadow-lg bg-white">
                <div className="card_img w-full h-60 bg-gray-200 flex items-center justify-center">
                  <img src={item.photo_url} alt={item.name} className="object-contain h-full" />
                </div>
                <div className="px-6 py-4 flex flex-col items-start">
                  <div className="title text-black text-lg font-semibold mt-3">{item.brand}</div>
                  <ul className="list-disc pl-5 mt-4">
                    <li>Id: {item.id}</li>
                    <li>Name: {item.name}</li>
                  </ul>
                  <div className="text-lg text-orange-500 mt-4 font-bold">Price: {item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="bg-[#F97300] text-white p-4 mt-8">
          <div className="container mx-auto text-center font-bold ">
            <p>@All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;

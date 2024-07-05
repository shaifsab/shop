import { useState } from "react";


function calculatePriceWithVAT(price, vatRate = 0.15) {
  return price * (1 + vatRate);
}

function Vat() {
  const [price, setPrice] = useState(0);
  const [priceWithVAT, setPriceWithVAT] = useState(null);
  const vatRate = 0.15; // VAT rate (15%)

  const handlePriceChange = (event) => {
    setPrice(parseFloat(event.target.value));
  };

  const handleClick = () => {
    const newPriceWithVAT = calculatePriceWithVAT(price, vatRate);
    setPriceWithVAT(newPriceWithVAT);
  };

  return (
    <div>
      <label htmlFor="price">Price:</label>
      <input type="number" id="price" value={price} onChange={handlePriceChange} />

      <button onClick={handleClick}>Calculate Price with VAT</button>

      {priceWithVAT !== null && (
        <p>Price with 15% VAT: {priceWithVAT.toFixed(2)}</p>
      )}
    </div>
  );
}

export default Vat
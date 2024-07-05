import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <> 
      <nav className="bg-[#4B70F5] p-4">
        <div className="container mx-auto flex justify-between items-center px-5 py-3">
          <div className="flex items-center space-x-4">
            <Link to="/user" className="text-black text-[24px] font-sans font-bold hover:text-[#4C3BCF] text-xl flex flex-wrap gap-1 items-center">Furniture world</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-black text-[24px] font-sans font-semibold hover:text-white text-lg">Home</Link>
            <Link to="/layoutTwo" className="text-black text-[24px] font-sans font-semibold hover:text-white text-lg">Product</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
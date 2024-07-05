import { Link } from "react-router-dom"

const NavbarTwo = () => {
  return (
   <>
       <nav className="bg-[#4B70F5] p-4">
        <div className="container mx-auto flex justify-between items-center px-5 py-3">
          <div className="flex items-center space-x-4">
            <Link to="/user" className="text-black text-[24px] font-sans font-semibold hover:text-white text-lg">User</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-black text-[24px] font-sans font-semibold hover:text-white text-lg">Home</Link>
          </div>
        </div>
      </nav>
   </>
  )
}

export default NavbarTwo
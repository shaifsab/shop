import { Outlet } from "react-router-dom"
import NavbarTwo from "../Components/NavbarTwo"
import Product from "../Pages/Product"


const LayoutTwo = () => {
  return (
    <>
     <NavbarTwo/>
     <Outlet/>
     <Product/>
    </>
  )
}

export default LayoutTwo
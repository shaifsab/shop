
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import Layout from './Layouts/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import NotFound from './Pages/NotFound'
import User from './Pages/User'
import LayoutTwo from './Layouts/LayoutTwo'
import Description from './Pages/Description'
import Confirm from './Pages/Confirm'

function App() {
const route = createBrowserRouter(
 createRoutesFromElements(
  <Route>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/blog'  element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/description' element={<Description/>}/>
      <Route path='/confirm' element={<Confirm/>}/>
      <Route path='*'  element={<NotFound/>}/>
    </Route>
    <Route path='/layoutTwo' element={<LayoutTwo/>}>
    </Route>
  </Route>
 )
)

  return (
    <> 
    <RouterProvider router={route}/>
    
    </>
  )
}

export default App

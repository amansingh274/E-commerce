
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Order from './pages/Order'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';



const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
         <SearchBar/>
         
      <Routes>
        <Route path='/' element={ <About/>}/>
        <Route path='Cart' element={< Cart/>}/>
         <Route path='/Collection' element={<Collection/>}/>
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/Home' element={<Home/>}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/Order' element={<Order/>}/>
         <Route path='/PlacaeOrder'element={<PlaceOrder/>}/>
         <Route path="/product/:productId" element={<Product />} />
      </Routes>
     <Footer/>
    </div>
  )
}

export default App

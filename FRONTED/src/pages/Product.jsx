import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from './../components/RelatedProduct';

const Product = () => {
const { productId ,  } = useParams(); 
console.log(productId);
const {products , currency ,addToCart} =useContext(ShopContext)
const[productData, setproductData]=useState(false)
const [image ,setImage]= useState();
const[size, setSize]=useState('')


const fetchProductData=async()=>{
  products.map((item)=>{
    if(item._id===productId){
      setproductData(item)
      setImage(item.image[0])
      return null;
    }
  })
}

useEffect(()=>{
  fetchProductData()
},[products])

  return productData ?  (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100' >


      {/* -------------product date ----------------- */}

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

  

        {/* ---------------product images------------------ */}

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
              {
                productData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                ))
              }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto ' src={image} alt="" />
          </div>
        </div>

         {/* -----------product info---------------- */}

         <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'> { productData.name}</h1>

            <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} className=" w-3.5" />
                <img src={assets.star_icon} alt="" className=" w-3.5"/>
                <img src={assets.star_icon} alt=""className=" w-3.5"/>
                <img src={assets.star_icon} alt="" className=" w-3.5"/>
                <img src={assets.star_dull_icon} alt=""className=" w-3.5" />
                <p className='pl2'> (122)</p>
             </div>
             <p  className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
             <p className='pt-5 text-gray-500 md:w-4/5'> { productData.description}</p>
             <div>
              <div className='flex flex-col gap-4 my-8'>
              <p>select Size</p>
              
                  <div className='flex gap-2'> 
                  {
                  productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={ `border py-2 px-4 bg-gray-100 ${item===size ? 'border-orange-500  ' :""} ` }key={index} > {item} </button>
                  ))
                }
                  </div>
              </div>
              <button  onClick={()=>addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'> ADD TO CART</button>
              <hr className='mt-8 text-sm:-4/5' />
              <div className='text-5m text-gray-500 mt-5 flex flex-col gap-1'> 
                <p > 100% Original product. </p>
                <p> Cash on delivery is available on this product.</p>
                <p> Easy return and exchange policy with in 7 days.</p>
              </div>
             </div>
          </div>
       </div>

       {/* ---------------description & Review Section---------------*/}

       <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'> Description</b>
           <p className='border px-5 py-3 text-sm'> Reviews ( 122)</p>
        </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>Elevate your style with our premium-quality cotton shirt, designed for all-day comfort and a timeless look.Whether you're dressing up for a night out or keeping it casual, this shirt brings versatility to your wardrobe. Soft fabric, modern fit, and durable stitching make it a must-have for every season.</p>
                <p>Step into comfort with our ultra-lightweight sneakers built for both performance and everyday wear. Featuring breathable mesh, cushioned soles, and a sleek design, these shoes are perfect for gym sessions or weekend adventures.</p>
            </div>
       </div>

       {/* ----------display related product----------------- */}
       <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) :  <div className='opacity-0'></div>
}

export default Product

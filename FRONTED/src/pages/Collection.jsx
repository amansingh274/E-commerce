import React, { useContext, useEffect, useState } from 'react'
// import Footer from '../components/Footer'
import { assets, products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from './../components/Title';
import ProductItem from '../components/ProductItem';
import Product from './Product';

const Collection = () => {

  const {products ,search, showSearch} = useContext (ShopContext)
  const [showFiltter, setShowFiltter]= useState(false)
   const [filterProduct, setFilterProduct]= useState([])
   const [category , setCategory]=useState([])
   const [subCategory ,setSubCategory]=useState([])
   const [sortType, setSortType]=useState('relevent')

   const toggleCategory=(e)=>{
    console.log('checkbox value', e.target.value)

    if (category.includes(e.target.value))
      
      {
       setCategory(prev=>prev.filter(item=>item !== e.target.value))
    }else
    setCategory(prev=>[...prev,e.target.value])
   }


   const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value))
      {
       setSubCategory(prev=>prev.filter(item=>item !== e.target.value))
    }else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
   }

   const applyFilter= ()=>{
    let ProductsCopy = products.slice();
     
    if(showSearch && search){
      ProductsCopy= ProductsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length >0){
      ProductsCopy= ProductsCopy.filter(item=>category.includes(item.category));
    }

    if (subCategory.length > 0){
      ProductsCopy= ProductsCopy.filter(item=>subCategory.includes( item.subCategory))
    }
    setFilterProduct(ProductsCopy)
   }

    const sortProduct = ()=>{

      const fpCopy = [...filterProduct]


   switch (sortType) {
    case 'low-high':
      setFilterProduct(fpCopy.sort((a,b)=>(a.price - b.price)));
      break;

      case 'high-low ':
        setFilterProduct(fpCopy.sort((a,b)=>( b.price - a.price)));
        break;

        default :
        applyFilter();
        break;
   }
  }

  
  

   useEffect(()=>{
    applyFilter()
   },[category, subCategory, search, showSearch])

   useEffect(()=>{
    sortProduct();
   },[sortType])


  return (
    <div>
      
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/*  filter option*/}
        <div className='min-w-60'>
          <p onClick={()=>setShowFiltter(!showFiltter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'> FILTTER
            <img className= { `h-3 sm:hidden ${showFiltter ?'rotate-90' :'' }`}src={assets.dropdown_icon} alt="" />
            </p>
           {/* category filter option*/}
           <div className={` border border-gray-300 pl-5 py-3 mt-6 ${showFiltter ? "" :'hidden' } sm:block`}> 
             <p  className='mb-3 text-sm font-medium'> CATEGORIES</p>
             
               <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                  <p className='flex gap-2'>
                     <input className='w-3' type="checkbox" value={'Men'} onClick={toggleCategory}/> Men
                  </p>
                  <p className='flex gap-2'>
                     <input className='w-3' type="checkbox" value={'Women'}  onClick={toggleCategory}/> Women
                  </p>
                  <p className='flex gap-2'>
                     <input className='w-3' type="checkbox" value={'Kids'}  onClick={toggleCategory}/> Kids
                  </p>
             
             </div>
           </div>
           
           {/* aubCategory  filter */}
           <div className={` border border-gray-300 pl-5 py-3 mt-6 ${showFiltter ? "" :'hidden' } sm:block`}> 
             <p className='mb-3 text-sm font-medium'>TYPE</p>
               <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                  <p className='flex gap-2'>
                     <input className='w-3' type="checkbox" value={'Topwear'} onClick={toggleSubCategory}/> Topwear
                  </p>
                  <p className='flex gap-2'>
                     <input className='w-3' type="checkbox" value={'Bottomwear'} onClick={toggleSubCategory}/> Bottomwear
                     wear
                  </p>
                  <p className='flex gap-2'>
                     <input className='w-3' type="checkbox" value={'Winterwear'} onClick={toggleSubCategory}/> Winterwear
                  </p>
             </div>
           </div>
        </div>

        {/* right side  */}
            <div className='flex-1'>
              <div className='flex justify-between text-balance sm:text-2xl mb-4'>
                <Title text1={'ALL'} text2={'COLLECTION'}/>

                {/* Product sort */}
                <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                  <option value="relevent"> sort by: Relavent</option>
                  <option value=" low-high"> sort by :low to high</option>
                  <option value=" high-low"> sort by:high to low</option>
                </select>
              </div>
              {/* Map product  */}
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                 {
                  filterProduct.map((item,index)=>{
                     return <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                  })
                 }
              </div>
                   
            </div>
      </div>

   
    </div>
  )
}

export default Collection

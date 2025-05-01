
import { v2 as cloudinary } from 'cloudinary';
// import { json } from 'express';
import productModel from "../models/productModels.js"
// function for add product 
const addProduct = async (req, res)=>{
 try {
    const {name,description , price,category,subCategory,size,bestseller}=req.body
    const image1 = req.files.image1  &&  req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3  &&  req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]

    const images= [image1,image2,image3,image4].filter((item)=>item !==undefined)

    let imageUrl = await Promise.all(
      images.map(async(item)=>{
         let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'}) 
         return result.secure_url
      })
    )
       const productData ={
         name,
         description,
         category,
         price:Number(price),
         subCategory,
         bestseller:bestseller==="true" ? true :false,
         size:JSON.parse(size),
         image:imageUrl,
         date:Date.now()
       }

       const product = new productModel(productData)
       await product.save()
    
      res.json({success:true , message:error.message})

 } catch (error) {
    res.json({success:false,message:error.message})
    console.log(error)
 
 }
}

// function for list product 
const listProducts = async(req,res)=>{

}

// function for removing product
const removeProduct = async(req,res)=>{

}
//function for single product info
const singleProduct = async(req,res)=>{

}

export {addProduct,singleProduct,removeProduct,listProducts}



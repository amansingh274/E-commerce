import React from 'react'
import Title from './../components/Title';
import { assets } from '../assets/assets';
import NewLatterBox from './../components/NewLatterBox';

const About = () => {
  return (
    <div >
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        < img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>At ShopEase, we believe shopping should be simple, enjoyable, and accessible to everyone. Founded in 2024, our mission is to bring you the best products — from everyday essentials to unique finds — all in one place.</p>
          <p>We’re more than just an online store. We’re a passionate team driven by innovation, customer satisfaction, and a love for great design. Whether you're shopping for fashion, electronics, home goods, or gifts, we've got something for every moment and mood.</p>

           <b className='text-gray-800'>Our Mission</b>
           <p>With a focus on quality, affordability, and fast delivery, we’re here to make your online shopping experience better every day.</p>

      </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOES US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>We continuously monitor customer feedback and supplier performance to maintain consistency and excellence. If something isn’t up to par, we act fast to make it right — because your trust means everything to us.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>At ShopEase, we’re all about making your shopping experience as smooth as possible.

          From effortless browsing to secure checkout, we’ve designed every step to be fast, intuitive, and hassle-free. Filter products by category, find what you love in seconds, and place your order in just a few clicks — anytime, anywhere.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Coustomer Service:</b>
          <p>At ShopEase, you're not just a customer — you're part of our community.

           We’re committed to delivering top-tier support at every step of your journey. Whether you need help placing an order, tracking a shipment, or resolving an issue, our friendly support team is here for you — fast, reliable, and always ready to assist.</p>
        </div>
      </div>
     < NewLatterBox/>
    </div>
  )
}

export default About

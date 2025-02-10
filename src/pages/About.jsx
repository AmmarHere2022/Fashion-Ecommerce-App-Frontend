import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox'


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>We want to make sure we are leading the way with the hottest pieces to create the new season trends. To make it easy for you, we have handpicked all our fave pieces to make sure your style is always the topic of conversation.</p>
        <p>With our versatile selection of trending pieces, it means you don't have to wait until everybody else is wearing them. Channel some 90's vibes and give your outfit of the day the wow factor with our range of varsity pieces or dare to be bold.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p> From date night with your significant other, to brunch with your bestie, to the off-duty model vibe, this duo is everything you need right now. With looks that are perfect for chill days right through to special occasions, this round up means business.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-700'>Quality assurance and quality control may seem the same thing, but they’re not. Apparel garments, accessories, and other textile products are assessed for quality in the preproduction phase, during production, and with a final inspection after the product has been completed.</p>
        </div>
        <div className="border px-10 
        md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-700'>Quality assurance and quality control may seem the same thing, but they’re not. Apparel garments, accessories, and other textile products are assessed for quality in the preproduction phase, during production, and with a final inspection after the product has been completed.</p>
        </div>
        <div className="border px-10 
        md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-700'>Customer service is the support we offer to our customers — both before and after they buy and use your products or services — that helps them have an easy, enjoyable experience with your brand. But customer service is more than solving a customer's problems and closing tickets</p>
        </div>
      </div>
      
      <NewsLetterBox/>

    </div>
  )
}

export default About
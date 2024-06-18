import React from 'react'
import { FaHandHoldingHeart } from "react-icons/fa";
import hero from '../../public/hero2.jpg'
import Image from 'next/image';

const Voluteer = () => {
  return (
    <section className='w-[86%] mx-[7%] my-[70px] text-black/85'>
      <h1 className='uppercase text-xl text-center font-bold text-black/80 mb-3'>Become a volunteer</h1>
      <h3 className='capitalize text-center text-xl font-[500]'>We need you</h3>

      <div className='grid grid-cols-2 gap-8 mt-10 justify-center items-center'>
         <div className='col-span-2 md:col-span-1 flex flex-col gap-6'>
            <h1 className='text-xl sm:text-2xl font-semibold'>Join our dedicated team of changemakers and make a positive difference in comunities. Volunteer with the We Care health foundation today!</h1>
            <div className="px-4 py-2 flex gap-4 w-fit bg-white  text-red-700 rounded border-2 border-red-700 hover:text-white hover:border-black hover:bg-black transition-all">
              <button className='font-semibold uppercase'>Volunteer Now</button> 
            <FaHandHoldingHeart size={30}/>
          </div>
         </div>

         <div className='col-span-2 md:col-span-1'>
           <Image src={hero} alt="hero" />
         </div>
      </div>
    </section>
  )
}

export default Voluteer
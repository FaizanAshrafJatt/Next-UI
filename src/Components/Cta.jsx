import React from 'react'
import Image from 'next/image'
import arrow from '../../public/images/arrow.png'
const Cta = () => {
  return (
    <div>
      <div className="flex w-full mt-9 py-[56px] px-[32px] sm:px-[324px]  sm:py-[88px] rounded-2xl flex-col bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <h1 className='text-[#FFFFFF] sm:text-[56px] text-center font-medium text-[32px]'>Monitor your website like a pro</h1>
        <p className='text-[#FFFFFF] text-center font-normal text-[16px]'>Join over 800+ happy site owners boosting productivity and efficiency!</p>
        <div className="flex flex-col sm:flex-row  sm:gap-x-[40px] mt-4 justify-center gap-y-8 gap-[10px] items-center">
 <button className='text-[#EB2891] rounded-md bg-[#FFFF] py-[16px] px-[32px]'>Try for Free</button>
 <div className='flex  items-center text-white'>  Contact Sales <span className='rounded-[50%] p-2'> <Image src={arrow} /> </span> </div>
        </div>
      </div>

    </div>
  )
}

export default Cta

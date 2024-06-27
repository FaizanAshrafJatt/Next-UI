import React from 'react'
import Check from '../../public/images/check.svg'
import Image from 'next/image'
const Pricing = () => {
  return (
    <div>
      <div className="flex flex-col  gap-y-4 mt-16">
        <div className="heading flex  flex-col w-full gap-y-3 items-center justify-center ">
          <p className='text-[#EB2891] font-medium '> Pricing</p>
          <h1 className='text-[24px] sm:text-[32px] font-medium '>
            Flexible plans for you
          </h1>
          <p className='text-[16px] sm:text-[18px] text-[#36485C]'>
            No hidden fees!
          </p>
        </div>
        <div className="content flex sm:flex-row justify-center sm:gap-x-[24px] flex-col gap-y-6">
          <div className="1 flex flex-col bg-[#F5F4FF] p-[24px] rounded-lg gap-y-4 sm:gap-x-5 sm:gap-y-8">
            <p className='text-[#4328EB] text-[18px] font-medium'> Free Trial</p>
            <p className='text-[16px] text-[#36485C]'> Perfect for testing the waters</p>
            <p><span className='font-medium text-[24px]'>$0</span> <span className='text-[#5F7896] font-medium'>/mo</span> </p>

            <ul className=' flex flex-col gap-y-2 text-[#36485C]'>
              <li className='flex gap-x-1 items-center'>
                <span> <Image src={Check} alt='check' /> </span>  Lorem ipsum dolor sit, once a t
              </li>
              <li className='flex gap-x-1 items-center'>
                <span> <Image src={Check} alt='check' /> </span>  Lorem ipsum dolor sit, once a t
              </li> <li className='flex gap-x-1 items-center'>
                <span> <Image src={Check} alt='check' /> </span>  Lorem ipsum dolor sit, once a t
              </li>

            </ul>

            <button className='bg-[#FFFFFF] rounded-md px-[14px] py-[15px] text-[#4328EB]'>
              Start Trial
            </button>


          </div>
          <div className="2 flex flex-col bg-[#4328EB] p-[24px] rounded-lg gap-y-4 sm:gap-x-5 sm:gap-y-8">
            <p className='text-[#FFFF] text-[18px] font-medium'> Business</p>
            <p className='text-[16px] text-[#FFFF]'>Perfect for small businesses</p>
            <p><span className='font-medium text-[24px] text-[#FFFF]'>$500</span> <span className='text-[#FFFF] font-medium'>/mo</span> </p>

            <ul className=' flex flex-col gap-y-2 text-[#FFFF]'>
              <li className='flex gap-x-1 items-center'>
                <span> <Image src={Check} className='invert' alt='check' /> </span>  Lorem ipsum dolor sit once a t,
              </li>
              <li className='flex gap-x-1 items-center'>
                <span> <Image src={Check} className='invert' alt='check' /> </span>  Lorem ipsum dolor sit, once a t
              </li> <li className='flex gap-x-1 items-center'>
                <span> <Image src={Check} className='invert' alt='check' /> </span>  Lorem ipsum dolor sit, once a t
              </li>

            </ul>

            <button className='bg-[#FFFFFF] rounded-md px-[14px] py-[15px] text-[#4328EB]'>
            Get Started
            </button>


          </div><div className="3 flex flex-col bg-[#F5F4FF] p-[24px] rounded-lg gap-y-4 sm:gap-x-5 sm:gap-y-8">
            <p className='text-[#4328EB] text-[18px] font-medium'> Enterprise</p>
            <p className='text-[16px] text-[#36485C]'> Perfect for big companies</p>
            <p><span className='font-medium text-[24px]'>Custom</span> </p>

            <ul className=' flex flex-col gap-y-2 text-[#36485C]'>
              <li className='flex gap-x-1 items-center'>
                <span> <Image src={Check} alt='check' /> </span>  Lorem ipsum dolor sit, once a t
              </li>
              <li className='flex gap-x-1 items-center'>
                <span> <Image src={Check} alt='check' /> </span>  Lorem ipsum dolor sit, once a t
              </li> <li className='flex gap-x-1 items-center'>
                <span> <Image src={Check} alt='check' /> </span>  Lorem ipsum dolor sit, once a t
              </li>

            </ul>

            <button className='bg-[#FFFFFF] px-[14px] py-[15px] text-[#4328EB]'>
              Start Trial
            </button>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Pricing

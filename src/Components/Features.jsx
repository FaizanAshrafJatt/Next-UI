import Feature1 from '../../public/images/feature-1.svg'
import Feature2 from '../../public/images/feature-2.svg'
import Feature3 from '../../public/images/feature-3.svg'
import Check from '../../public/images/check.svg'
import Arrow from '../../public/images/blue-button.svg'
import Arrow1 from '../../public/images/arrow.png'
import Image from 'next/image'
export function Feature(){
  return (
<div className="flex flex-col gap-y-[56px] py-[56px]  lg:py-[120px] lg:gap-y-[80px]">


 <div className="flex flex-col sm:flex-row-reverse"> 
 <Image src={Feature1} alt='Feature Image 1' className=' hidden sm:block w-1/2' /> 
<div className="ok flex flex-col gap-y-[24px] md:pe-[20px] sm:w-1/2">
      <div className="text-[#0085FF] font-medium sm:text-[18px]"> Sales Monitoring</div>
     
     <div className="text-[24px] font-medium sm:text-[42px] ">Simplify your sales monitoring</div>
     <Image src={Feature1} className='block sm:hidden' />
     <div className='flex justify-center text-[#36485C]'>
     Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. 
     </div>
     <ul className='flex flex-col gap-y-3'>
      <li className='text-[#36485C] flex items-center gap-x-3'>
       <span  >
        <Image src={Check} />
        </span> 
      Lorem ipsum dolor sit amet
      </li>
      <li className='text-[#36485C] flex items-center gap-x-3'>
       <span  >
        <Image src={Check} />
        </span> owerful technique on earth
      </li>  <li className='text-[#36485C] flex items-center gap-x-3'>
       <span  >
        <Image src={Check} />
        </span> 
      Bado badi bado badi
      </li>
     </ul>
    <div>
      <button className='text-[#0085FF] flex font-medium gap-x-3 items-center'>
        Learn More <span><Image src={Arrow} /></span>
      </button>
    </div>

 </div>
 </div>

 <div className="flex flex-col sm:flex-row"> 
 <Image src={Feature2} alt='Feature Image 1' className=' hidden sm:block w-1/2' /> 
<div className="ok flex flex-col gap-y-[24px] md:ps-[40px] sm:w-1/2">
      <div className="text-[#0085FF] font-medium sm:text-[18px]"> Sales Monitoring</div>
     
     <div className="text-[24px] font-medium sm:text-[42px] ">Simplify your sales monitoring</div>
     <Image src={Feature2} className='block sm:hidden' />
     <div className='flex justify-center text-[#36485C]'>
     Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. 
     </div>
     <ul className='flex flex-col gap-y-3'>
      <li className='text-[#36485C] flex items-center gap-x-3'>
       <span  >
        <Image src={Check} />
        </span> 
      Lorem ipsum dolor sit amet
      </li>
      <li className='text-[#36485C] flex items-center gap-x-3'>
       <span  >
        <Image src={Check} />
        </span> owerful technique on earth
      </li>  <li className='text-[#36485C] flex items-center gap-x-3'>
       <span  >
        <Image src={Check} />
        </span> 
      Bado badi bado badi
      </li>
     </ul>
    <div>
      <button className='text-[#0085FF] flex font-medium gap-x-3 items-center'>
        Learn More <span><Image src={Arrow} /></span>
      </button>
    </div>

 </div>
 </div>


 <div className="flex flex-row-reverse">
  <Image src={Feature3} alt='feature 3 image' className='hidden sm:block w-1/2'/>
  <div className="flex flex-col gap-y-6 sm:py-[56px]  sm:pe-6 sm:w-1/2">
    <p className='text-[16px] sm:text-[18px]  text-[#EB2891]'>Growth Monitoring</p>
    <h1 className='sm:text-[42px] text-[24px] font-medium'>Monitor your site’s new subscribers </h1>
    <Image src={Feature3} alt='Feature 3 image 'className='sm:hidden block'/>
    <p className='leading-[24px] text-[#36485C]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. </p>
   
    <div className="flex  gap-16 "> 
    <div className="flex flex-col">
        <p className='text-[20px] font-medium py-3'>100+</p>
        <p className='text-[#36485C]'>Lorem  ipsum </p>

      </div>
      <div className="flex flex-col">
        <p className='text-[20px] font-medium py-3'>800+</p>
        <p className='text-[#36485C]'>Lorem  ipsum </p>
      </div>

    </div>
    <div>
      <button className='text-[#EB2891] flex font-medium gap-x-3 items-center'>
        Learn More <span><Image src={Arrow1} /></span>
      </button>
    </div>

  </div>
 </div>

</div>

  )
}
import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/Logo.svg'
import Arrow from '../../public/images/Plus.svg'
import Facebook from '../../public/images/Facebook.svg'
import X from '../../public/images/X.svg'
import Feed from '../../public/images/Feed.svg'
const Footer = () => {
  return (
    <div className='pt-[80px] gap-y-14 pb-[40px]  flex flex-col  sm:items-center justify-center'> 
  <div className="flex items-center gap-x-2 ">   
 <Image src={Logo} alt='FooFooter Logo' />
<p className='text-[17px]'>DevAnim</p>
</div>

<ul className=' flex flex-col sm:gap-x-2 sm:flex-row gap-y-[32px] text-[#36485C]'>
  <li className='flex  justify-between'>
    Features  <span> <Image src={Arrow} className='sm:hidden' /> </span>
  </li>
  <li className='flex justify-between'>
    Pricing  <span> <Image src={Arrow} className='sm:hidden'/> </span>
  </li>
  <li className='flex justify-between'>
    Enterprise  <span> <Image src={Arrow} className='sm:hidden' /> </span>
  </li>
  <li className='flex justify-between'>
    Careers  <span> <Image src={Arrow} className='sm:hidden' /> </span>
  </li>

</ul>

<div className="flex font-medium text-sm text-[#5F7896] text-center justify-center "> 

© Copyright 2024. Your Site. All rights reserved.
</div>
<div className="flex gap-x-[56px] justify-center">

<Image src={Facebook} />
<Image src={X} />
<Image src={Feed} />
</div>

    </div>
  )
}

export default Footer

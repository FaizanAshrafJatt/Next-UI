import Image from 'next/image'
import React from 'react'
import Logo from '../../public/images/Logo.svg'
import User from '../../public/images/User.svg'
import Menu from '../../public/images/Menu.svg'
 const navLinks = [
 {name :"Features"} ,
 {name :"Pricing"},
 {name : "Enterprise"},
 {name :  "Careers"},
 ];

const Navbar = () => {
  return (
    <div className="flex w-full justify-center ">
    <nav className='flex w-full justify-between items-center px-7 md:px-20 py-4 bg-opacity-50 lg:container lg-mx-auto '>
<div className='flex'>
    <Image src={Logo} />
    <div className=' md:flex pt-2 hidden pl-[74px] gap-x-[56px]   '>
      {
        navLinks.map((link , index)=>(
        <p key={index} > {link.name} </p>  
        ))
      }
    </div>
</div>
<div  className='flex gap-x-5' >
<div className='flex  gap-x-3'>
    <Image src={User} />
    <span className='font-medium  hidden md:block'>
      Sign In
    </span>
    </div>
    <div className='block md:hidden'>
      <Image src={Menu} />
    </div>
</div>


    </nav></div>
  )
}

export default Navbar

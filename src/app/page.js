
import Cta from '@/Components/Cta'
import { FAQ } from '@/Components/Faq'
import { Feature } from '@/Components/Features'
import Footer from '@/Components/Footer'
import { Hero } from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import Pricing from '@/Components/Pricing'
import React  from 'react'

const page = () => {
 
  
  return (
   <>
   <Navbar />

   <Hero />
   <div className='px-[20px]  lg:container lg:px-20 mx-auto'>
   <Feature />
   <FAQ />
   <Pricing />
   <Cta />
   <Footer />
   </div>

   </>


  )
}

export default page

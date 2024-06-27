import Image from 'next/image'
import Arrow from '../../public/images/blue-button.svg'
import Gradient from '../../public/images/Gradient.svg'
import HeroImage from '../../public/images/Image.svg'
import Google from '../../public/images/Google.svg'
import Slack from '../../public/images/Slack.svg'
import Trustpilot from '../../public/images/Trustpilot.svg'
import CNN from '../../public/images/CNN.svg'
import Clutch from '../../public/images/Clutch.svg'





export function Hero() {
  return (
    <div>
      <div className="pt-4 lg:pt-10">
        <div className="px-[20px] lg:px-[280px]">
          <h1 className="text-center font-[600]  text-[32px] lg:text-[64px] lg:leading-[72px]  text-[#172026]">
            Start Monitoring your website Like a Pro ~
          </h1>
          <p className="text-center pt-[24px] lg:text-[18px] lg:leading-7 text-#172026">
            Get a bird's eye view with our customziable dashboard ,Stay on top
            of things and always try to never loose a battle . When there is a moment of Life and Death.
          </p>

          <div className="flex w-full mt-5 gap-x-3 justify-center lg:gap-6">
            <button className="bg-[#4320EB] text-white rounded-[4px] py-4 px-8 w-1/2 lg:w-fit">
              Try for free
            </button>
            <button className=" flex items-center gap-x-2  lg:w-fit justify-center w-1/2 text-[#4320EB]">
              View Pricing
              <span>
                <Image src={Arrow} />
              </span>
            </button>
          </div>

        </div>
        <div className="relative h-full lg:mt-40 w-full flex justify-center ">
          <Image src={Gradient}  className='min-h-[500px] w-full object-cover lg:h-auto'/>
          <div className="absolute bottom-5 w-full flex flex-col items-center">

            <Image src={HeroImage} className='-ml-5 lg:mt-8 xl-mt-8     h-[320px] sm:-mb-20  lg:-mb:28 sm:h-[400px] lg:h-auto xl:w-[70%] ' /> 
            <div className="flex  w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className='text-[#FFFFFF] text-[18px] lg:text-[14px]'> Trust by these Companies </p>
      <div className="grid grid-cols-3 lg:grid-cols-5  lg:px-[8px] items-center justify-center justify-items-center px-[20px]">
        <Image src={Google} />
        <Image src={Slack} />
        <Image src={Trustpilot} />
        <Image src={CNN} />
        <Image src={Clutch} />
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

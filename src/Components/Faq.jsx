'use client'
import * as Accordion from '@radix-ui/react-accordion';
import Image from 'next/image';
import Plus from '../../public/images/Plus.svg'
const items = [
{
  question : 'What do you do for living in Dubai Baby',
  answer : ' east or west dubai is the best :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam, nesciunt unde, veritatis dolor, maiores ad perspiciatis doloremque eum neque id. Labore sunt eius voluptatibus neque beatae, qui molestiae quas! ',
},
{
  question : 'What do you do for living in Dubai Baby',
  answer : ' east or west dubai is the best :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam, nesciunt unde, veritatis dolor, maiores ad perspiciatis doloremque eum neque id. Labore sunt eius voluptatibus neque beatae, qui molestiae quas! ',
},
{
  question : 'What do you do for living in Dubai Baby',
  answer : 'east or west dubai is the best :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam, nesciunt unde, veritatis dolor, maiores ad perspiciatis doloremque eum neque id. Labore sunt eius voluptatibus neque beatae, qui molestiae quas! ',
},
{
  question : 'What do you do for living in Dubai Baby',
  answer : ' east or west dubai is the best :  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam, nesciunt unde, veritatis dolor, maiores ad perspiciatis doloremque eum neque id. Labore sunt eius voluptatibus neque beatae, qui molestiae quas! '
},
];

export function FAQ() {

  return(
<div>
 
 <div className="flex flex-col justify-between   sm:flex-row">
  <div className="flex flex-col gap-y-4 sm:w-2/5">
    <p className="text-[#EB2891] text-[14px] font-medium"> Frequently Asked Question</p>
    <h1 className="text-2xl  font-medium leading-9"> Let’s clarify some of your questions</h1>
    <p className="text-[#36485C] font-normal* text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
  </div>
<div className="flex sm:w-3/5">
<Accordion.Root
type="single"
defaultValue="item-1"
collapsible
className='flex flex-col w-full '
>
{items.map((item , index) => ( 
<div>
<Accordion.Item value={`item-${index +1 }` } className='bg-[#E3F1FF] w-full p-[16px] rounded-lg mt-3'>
<Accordion.Header>
        <Accordion.Trigger className='w-full flex justify-between items-center gap-x-1'>
          <p className='text-left font-medium bg-[#E3F1FF]'>
            {item.question}
          </p>
          <span>
            <Image src={Plus} alt="see more" />
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>
        <p className='pt-2 text-[#36485C]'>
          {item.answer}
        </p>
      </Accordion.Content>
</Accordion.Item>
</div>
))}
    
   
      
    
  </Accordion.Root>
</div>
 </div>


</div>

  )
}
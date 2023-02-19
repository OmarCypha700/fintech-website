import feature1 from '../public/feature1.webp'
import feature2 from '../public/feature2.webp'
import feature3 from '../public/feature3.webp'
import Image from 'next/image'

export default function Features() {
    return (
    
        <div className='md:w-4/5 m-auto md:mt-6'>

          <div className='flex flex-col mx-4 md:py-10 md:mx-4 md:flex-row justify-center items-center md:border-b-2'>
            <div className='py-8 md:px-16 md:w-1/2'>
              <h3 className='text-xl md:text-2xl font-semibold'>Lorem ipsum dolor sit amet.</h3>
              <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className=' md:w-1/2'>
              <Image src={feature1} alt="image" />
            </div>
          </div>

          <div className='flex flex-col mx-4 md:py-10 md:mx-4 md:flex-row justify-center items-center md:border-b-2'>
            <div className='py-8 md:px-16 md:w-1/2'>
              <h3 className='text-xl md:text-2xl font-semibold'>Lorem ipsum dolor sit amet.</h3>
              <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className=' md:w-1/2'>
              <Image src={feature2} alt="image" />
            </div>
          </div>

          <div className='flex flex-col mx-4 md:py-10 md:mx-4 md:flex-row justify-center items-center md:border-b-2'>
            <div className='py-8 md:px-16 md:w-1/2'>
              <h3 className='text-xl md:text-2xl font-semibold'>Lorem ipsum dolor sit amet.</h3>
              <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className=' md:w-1/2'>
              <Image src={feature3} alt="image" />
            </div>
          </div>

        </div>

    )
}
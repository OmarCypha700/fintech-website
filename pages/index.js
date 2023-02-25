import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LandingPage from '@/components/LandingPage'
import Testimonial from '@/components/Testimonials'
import Features from '@/components/Features'

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage/>
      <div className='my-8 '>
        <h1 className='px-4 text-center md:text-xl'>
          <span className='text-red-400 '>Lorem ipsum</span>  dolor sit amet, consectetur adipisicing elit. Rerum architecto commodi earum laborum neque
        </h1>

        <Features/>

      </div>
      <Testimonial/>
      <Footer />
    </>
  )
}

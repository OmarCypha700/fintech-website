import Navbar from "@/components/Navbar"
import Leaders from "@/components/Leaders"
import Testimonial from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function About() {
    return (
        <div>
            <Navbar/>
            <h1 className="text-center font-semibold text-2xl py-4 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi facilis rerum culpa iusto facere qui.
            </h1>
            <Leaders/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}
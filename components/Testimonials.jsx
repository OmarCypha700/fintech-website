import Image from "next/image"
import Profile1 from "../public/profile1.webp"
import Profile2 from "../public/profile2.webp"
import Profile3 from "../public/profile3.webp"

export default function Testimonial () {
    return (
        <>
        <div className=" mx-2 md:w-5/6 md:m-auto bg-black text-white p-6">
            <h2 className=" text-center text-xl text-semibold ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>

            <div className=" flex flex-wrap gap-6 justify-center py-8">
                <div className="testimonial-card md:w-1/3">
                    <p className=" text-left py-2 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </p>
                    <div className=" flex items-center gap-4 py-2">
                        <div className="w-10 rounded-full border-2 ">
                            <Image 
                            src={Profile1} 
                            alt= 'profile pic'
                            className="profile"
                            />
                        </div>
                        <div>
                        <p>Lorem Ipsium</p>
                        <p className="username">@Loremipsium</p>
                        </div>
                        
                    </div>
                </div>

                <div className="testimonial-card md:w-1/3">
                    <p className=" text-left py-2 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </p>
                    <div className=" flex items-center gap-4 py-2">
                        <div className="w-10 rounded-full border-2 ">
                            <Image 
                            src={Profile2} 
                            alt= 'profile pic'
                            className="profile"
                            />
                        </div>
                        <div>
                        <p>Lorem Ipsium</p>
                        <p className="username">@Loremipsium</p>
                        </div>
                        
                    </div>
                </div>

                <div className="testimonial-card md:w-1/3">
                    <p className=" text-left py-2 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </p>
                    <div className=" flex items-center gap-4 py-2">
                        <div className="w-10 rounded-full border-2 ">
                            <Image 
                            src={Profile3} 
                            alt= 'profile pic'
                            className="profile"
                            />
                        </div>
                        <div>
                        <p>Lorem Ipsium</p>
                        <p className="username">@Loremipsium</p>
                        </div>
                        
                    </div>
                </div>

                <div className="testimonial-card md:w-1/3">
                    <p className=" text-left py-2 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </p>
                    <div className=" flex items-center gap-4 py-2">
                        <div className="w-10 rounded-full border-2 ">
                            <Image 
                            src={Profile1} 
                            alt= 'profile pic'
                            className="profile"
                            />
                        </div>
                        <div>
                        <p>Lorem Ipsium</p>
                        <p className="username">@Loremipsium</p>
                        </div>
                        
                    </div>
                </div>

                <div className="testimonial-card md:w-1/3">
                    <p className=" text-left py-2 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </p>
                    <div className=" flex items-center gap-4 py-2">
                        <div className="w-10 rounded-full border-2 ">
                            <Image 
                            src={Profile2} 
                            alt= 'profile pic'
                            className="profile"
                            />
                        </div>
                        <div>
                        <p>Lorem Ipsium</p>
                        <p className="username">@Loremipsium</p>
                        </div>
                        
                    </div>
                </div>

                <div className="testimonial-card md:w-1/3">
                    <p className=" text-left py-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </p>
                    <div className=" flex items-center gap-4 py-2">
                        <div className="w-10 rounded-full border-2 ">
                            <Image 
                            src={Profile3} 
                            alt= 'profile pic'
                            className="profile"
                            />
                        </div>
                        <div>
                        <p>Lorem Ipsium</p>
                        <p className="username">@Loremipsium</p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}
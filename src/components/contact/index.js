'use client'

import React from 'react'

import { StarsBackground } from '../ui/stars-background'
import Image from 'next/image'
import Img1 from '../../../public/img2.jpg'


// import { VortexDemoSecond } from '../acernityUi/vortex-comp'

const Contact = () => {
    return (
        <div id='contact' className='relative min-h-screen'>

            {/* <h1 className="pointer-events-none pt-10 whitespace-pre-wrap bg-gradient-to-b from-gray-100 via-gray-300 to-gray-800  bg-clip-text text-center lg:text-5xl md:text-3xl text-xl font-extrabold leading-none text-transparent">
                Contact
            </h1> */}

            

            <>


            </>

            <h1 className="z-50 pointer-events-none pt-10 whitespace-pre-wrap bg-gradient-to-b from-gray-100 via-gray-300 to-gray-800  bg-clip-text text-center lg:text-5xl md:text-3xl text-3xl font-extrabold leading-none text-transparent">
                Contact
            </h1>

            <section className="text-gray-400 body-font">
                <div className="container mx-auto flex flex-col px-5 py-14 justify-center items-center">
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <p className="mb-8 leading-relaxed">
                            Ready to elevate your football skills? Get in touch with us today to schedule a session or learn more about our programs.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Book a <span className='text-xl font-bold text-gray-200'>Demo</span> Session with us.
                        </p>

                        <div>

                            <div className="p-2 w-full text-center">

                                <div className=' space-y-3 my-5 '>
                                    <ul>
                                        <a href='mailto:boradepavan18@gmail.com' className="z-30  cursor-pointer text-gray-400 hover:text-white font-medium text-xl md:text-3xl hover:underline underline-offset-4"> boradepavan18@gmail.com</a>
                                    </ul>

                                    <ul >

                                        <a href='tel:+919028119773' className="leading-normal text-gray-400 font-medium text-lg md:text-2xl hover:text-white hover:underline underline-offset-4  z-30">+91 9028119773</a>
                                    </ul>
                                </div>

                                {/* <div className="w-[40rem]  relative bg-black">
                                   
                                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                                    <div className="absolute inset-0 w-full mb-6 h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

                                </div> */}

                                
                            </div>

                        </div>


                    </div>
                </div>
            </section>





            <p className='text-center text-gray-600 font-mono'>Copyright©ones8port 2024</p>
        </div>
    )
}

export default Contact
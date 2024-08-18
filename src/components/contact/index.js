'use client'

import React from 'react'

import { StarsBackground } from '../ui/stars-background'
import Image from 'next/image'



// import { VortexDemoSecond } from '../acernityUi/vortex-comp'

const Contact = () => {
    return (
        <div id='contact' className='relative '>




            <>


            </>


            <section className="text-gray-400 body-font">
                <div className="container mx-auto flex flex-col px-5 pt-14 justify-center items-center">
                    <div className="w-full md:w-2/3 flex flex-col space-y-4 mb-16 items-center text-center">
                        <h1 className="text-3xl text-center text-black font-semibold">
                            Contact Us
                        </h1>

                        <p className="mb-8 leading-relaxed text-gray-800">
                            Ready to elevate your football skills? Get in touch with us today to schedule a session or learn more about our programs. 
                        </p>
                        <p className="mb-8 text-gray-600 leading-relaxed">
                            Book a <span className='text-xl font-bold text-gray-700'>Demo</span> Session with us.
                        </p>

                        <div>

                            <div className="p-2 w-full text-center">

                                <div className=' space-y-3 my-5 '>
                                    <ul>
                                        <a href='mailto:boradepavan18@gmail.com' className="z-30  cursor-pointer text-gray-600 hover:text-black font-medium text-xl md:text-3xl hover:underline underline-offset-4"> boradepavan18@gmail.com</a>
                                    </ul>

                                    <ul >

                                        <a href='tel:+919028119773' className="leading-normal text-gray-600 font-medium text-lg md:text-2xl hover:text-black hover:underline underline-offset-4  z-30">+91 9028119773</a>
                                    </ul>
                                </div>


                            </div>

                        </div>


                    </div>
                </div>
            </section>

            <p className='text-center text-gray-400 font-mono'>Copyright©ones8port 2024</p>
        </div>
    )
}

export default Contact
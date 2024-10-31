'use client'

import React from 'react'

import { StarsBackground } from '../../ui/stars-background'
import Image from 'next/image'
import { Instagram, Mail, Phone } from 'lucide-react'



// import { VortexDemoSecond } from '../acernityUi/vortex-comp'

const Contact = () => {
    return (
        <div id='contact' className='relative '>




            <>


            </>


            <section className="text-gray-400 body-font">
                <div className="container mx-auto flex flex-col px-5 pt-14 justify-center items-center">
                    <div className="w-full md:w-2/3 flex flex-col space-y-4 mb-16 items-center text-center">
                        <h1 className="text-4xl md:text-4xl font-bold  text-center bg-clip-text text-blue-600 bg-gradient-to-b from-black via-black to-black bg-opacity-50">
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

                                <div className=' space-y-5 my-5 '>
                                    <div className='flex  justify-center space-x-7'>
                                        <ul className='flex justify-center'>
                                            <a href='https://www.instagram.com/one8sport.in/profilecard/?igsh=OTR2ZzhkY3VtbWp1' target='_blank' className="z-30  cursor-pointer text-gray-600 text-center hover:text-black font-medium text-xl md:text-3xl hover:underline underline-offset-4">
                                                <Instagram size={30} />
                                            </a>
                                        </ul>

                                        <ul>
                                            <a href='mailto:boradepavan18@gmail.com' className="z-30  cursor-pointer text-gray-600 hover:text-black font-medium text-xl md:text-3xl hover:underline underline-offset-4">  <Mail size={30} /></a>
                                        </ul>

                                        <ul >

                                            <a href='tel:+919028119773' className="leading-normal text-gray-600 font-medium text-lg md:text-2xl hover:text-black hover:underline underline-offset-4  z-30"><Phone size={30} /></a>
                                        </ul>
                                    </div>
                                    <ul className='pt-4' >

                                        <a href='tel:+919028119773' className="leading-normal text-gray-600 font-medium text-lg md:text-2xl hover:text-black hover:underline underline-offset-4  z-30">+919028119773</a>
                                    </ul>
                                </div>


                            </div>

                        </div>


                    </div>
                </div>
            </section>

            <p className='text-center text-gray-500 font-mono'>Copyright©ones8port 2024</p>
            <p className="ps-3 text-center md:text-left text-gray-400 font-mono text-sm">
                Developed by
                <a href="https://www.omnandurkar.me" target='_blank' className=" underline text-blue-400 hover:text-gray-600 ml-1">
                    Om Nandurkar
                </a>
            </p>

            <br />

        </div>
    )
}

export default Contact
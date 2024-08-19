import React from 'react'
import Image from 'next/image';
import logo from '../../../public/logo.jpg'
// import { StarsBackground } from '../ui/stars-background'




const AboutSection = () => {
    return (
        <div id='about' className='flex flex-col min-h-screen justify-center items-center'>
            <div  >

                <h1 className="pointer-events-none drop-shadow-lg mt-10 whitespace-pre-wrap bg-gradient-to-b  from-black via-black to-black  bg-clip-text text-center lg:text-5xl md:text-3xl text-3xl font-extrabold leading-none text-transparent">
                    READY TO LEVEL UP YOUR GAME?
                </h1>
                <p className='my-4 text-gray-700 text-center '>Join our network and let's  kick start your sports Journey together. </p>
            </div>


            <>

                <section className=" text-gray-400 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                            {/* <img className="object-cover object-center rounded" alt="hero" src="https://airmenusimages.blr1.cdn.digitaloceanspaces.com/brands/brands_37_1653391775.9605415.png" /> */}
                            <Image className="object-cover object-center rounded" alt="hero" src={logo} />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">One8sport

                            </h1>
                            <p className="mb-8 leading-relaxed text-gray-700">One8sport is a sports coaching academy founded by coach Pavan Borade. We bring top-tier training directly to your doorstep, focusing on skill development, technique, and a deep understanding of the game. Our mission is to provide inclusive and personalized coaching, helping players of all levels grow and excel. Join One8sport and elevate your sports journey!</p>


                        </div>
                    </div>
                </section>


            </>




        </div >
    )
}

export default AboutSection
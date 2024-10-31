import React from 'react'
import { SpotlightPreview } from '../acernityUi/spotlight-comp'
import WhatWeOffer from '../HomeComp/what-we-offer';
import TrainingProg from '../HomeComp/training-prog';
import WhyChooseUs from '../HomeComp/why-choose-us';
import Image from 'next/image';
import logo from '../../../public/logo.jpg'


const TrainingProgram = () => {


    return (
        <div id='programs'  >
            {/* <TrainingProg/> */}

            <SpotlightPreview />


            <div className='pb-5'>

                <section className="text-gray-700 body-font">
                    <div className="container px-0  mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full mb-10 px-4 lg:mb-0 rounded-lg overflow-hidden flex justify-center items-center flex-col text-center">
                            {/* <Image
                                alt="feature"
                                className="object-cover object-center h-full w-full"
                                // src="https://img.freepik.com/free-photo/soccer-balloon-camp-monochrome-scene-generative-ai_188544-9745.jpg?w=1480&t=st=1723988871~exp=1723989471~hmac=1a8a57a86e1049b252c21656bc7f6cdb2e67b942ac1c644a8a7df0cdb2e02c03"
                                src={logo}
                                data-aos="fade-up"
                            /> */}
                            <div className='p-4 md: py-14 md:px-6 rounded border-2 border-black'>
                                <h1 className="text-4xl md:text-4xl font-bold  text-center bg-clip-text text-blue-600 bg-gradient-to-b from-black via-black to-black bg-opacity-50">
                                    One8sport
                                </h1>
                                <h2 className="text-lg text-gray-600 mt-4 ">
                                    One8sport provides specialized football coaching in schools, aligning training with your curriculum. Our certified coaches enhance athletic skills while instilling values like teamwork and discipline. By integrating expert coaching, we empower students to reach their potential both on and off the field, fostering a lifelong passion for sports.
                                </h2>
                            </div>

                        </div>

                        <div className='px-5'>

                            <WhatWeOffer />
                        </div>

                    </div>
                </section>
            </div>



            {/* Why Choose Us */}

            <div className='px-5'>
                <WhyChooseUs />

            </div>
        </div>

    )
}

export default TrainingProgram

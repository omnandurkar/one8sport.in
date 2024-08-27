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
            <SpotlightPreview />

            {/* <TrainingProg/> */}


            <div>
                {/* <h1 className="pointer-events-none mt-10 whitespace-pre-wrap bg-gradient-to-b  from-gray-100 via-gray-400 to-gray-800 bg-clip-text text-center lg:text-5xl md:text-3xl text-3xl font-extrabold leading-none text-transparent">
                    What We Offer
                </h1> */}
                <section className="text-gray-700 body-font">
                    <div className="container px-5  mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                            <Image
                                alt="feature"
                                className="object-cover object-center h-full w-full"
                                // src="https://img.freepik.com/free-photo/soccer-balloon-camp-monochrome-scene-generative-ai_188544-9745.jpg?w=1480&t=st=1723988871~exp=1723989471~hmac=1a8a57a86e1049b252c21656bc7f6cdb2e67b942ac1c644a8a7df0cdb2e02c03"
                                src={logo}
                                data-aos="fade-up"
                            />
                        </div>


                        <WhatWeOffer />

                    </div>
                </section>
            </div>



            {/* Why Choose Us */}

            <WhyChooseUs />

        </div>
    )
}

export default TrainingProgram

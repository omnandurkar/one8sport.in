import React from 'react'
import { SpotlightPreview } from '../acernityUi/spotlight-comp'
import WhatWeOffer from '../HomeComp/what-we-offer';
import TrainingProg from '../HomeComp/training-prog';
import WhyChooseUs from '../HomeComp/why-choose-us';

const TrainingProgram = () => {


    return (
        <div id='programs'  >
            <SpotlightPreview />

            {/* <TrainingProg/> */}

           
            <div>
                {/* <h1 className="pointer-events-none mt-10 whitespace-pre-wrap bg-gradient-to-b  from-gray-100 via-gray-400 to-gray-800 bg-clip-text text-center lg:text-5xl md:text-3xl text-3xl font-extrabold leading-none text-transparent">
                    What We Offer
                </h1> */}
                <section className="text-gray-400 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                            <img
                                alt="feature"
                                className="object-cover object-center h-full w-full"
                                src="https://www.shutterstock.com/image-photo/street-basketball-black-white-photo-600nw-383394034.jpg"
                            />
                        </div>


                        <WhatWeOffer />

                    </div>
                </section>
            </div>



            {/* Why Choose Us */}

            <WhyChooseUs/>
            
        </div>
    )
}

export default TrainingProgram

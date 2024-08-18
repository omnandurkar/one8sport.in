'use client'

import React, { useEffect } from 'react'

import { FloatingNavDemo } from '../acernityUi/floating-nav-comp'
import AboutSection from '../about'
import Services from '../services'
import Contact from '../contact'
import TrainingProgram from '../training-prog'
import OurSports from '../our-sports'
import OurCoaches from '../our-coaches'

import Aos from 'aos';
import 'aos/dist/aos.css'

import Servicecard from '../servicecard'
import AboutDrag from '../HomeComp/about-drag'
import { StarsBackground } from '../ui/stars-background'
import FAQSection from '../faq'
import Whatsapp from '../HomeComp/Whatsapp'
import HeroSec from '../HomeComp/hero-sec'


const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, delay: 300 });
    })

    return (
        <div id='home'>




            <FloatingNavDemo />

            {/* bg-gradient-to-b from-black via-black to-gray-700 */}

            <div className=' bg-black relative min-h-screen'>
                <HeroSec />

                {/* <StarsBackground /> */}
            </div>


            <div className='bg-white  min-h-screen'>
                <AboutSection />

            </div>
            <div className='min-h-screen'>

                <Servicecard />

            </div>


            <div className='min-h-screen'>
                <TrainingProgram />

                <FAQSection />
            </div>


            <div>

                <AboutDrag />

            </div>

            <div className=''>
                <Contact />

            </div>

            <Whatsapp />




            {/* </TracingBeam> */}
        </div>
    )
}

export default Home
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import img1 from '../../../../public/main.jpg';
import img2 from '../../../../public/main2.jpg';
import img3 from '../../../../public/main3.jpg';

const HeroSec = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const data = [
        {
            image: img1,
            title: 'Title 1',
            description: 'Ready to kickstart your journey to greatness.',
        },
        {
            image: img2,
            title: 'Title 2',
            description: 'The road to victory starts with the right coach.',
        },
        {
            image: img3,
            title: 'Title 3',
            description: 'Dreaming of scoring the winning goals.',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
                setIsTransitioning(false);
            }, 500); // Half the interval duration for the blur effect
        }, 3000); // Change image every 1 second

        return () => clearInterval(interval);
    }, [data.length]);

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            setIsTransitioning(false);
        }, 500);
    };

    const handlePrev = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
            setIsTransitioning(false);
        }, 500);
    };

    return (
        <div className='h-screen p-10'>
            <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-center md:text-start from-white via-gray-400 to-gray-600 bg-clip-text text-3xl font-extrabold leading-none text-transparent">
                ONE8SPORT
            </h1>

            <div className='min-h-screen -mt-5 flex flex-col justify-center items-center'>
                <div className="text-white flex flex-col items-center space-y-4">
                    <div className={`relative md:w-[26rem] w-64 md:h-[26rem] h-64 mb-5 transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0 filter blur-sm' : 'opacity-100 filter blur-0'}`}>
                        <Image
                            src={data[currentIndex].image}
                            alt={data[currentIndex].title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <p className={`text-lg text-center transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0 filter blur-sm' : 'opacity-100 filter blur-0'}`}>
                        {data[currentIndex].description}
                    </p>
                    <div className="flex space-x-4">
                        <button
                            onClick={handlePrev}
                            className="bg-gray-900 px-2 py-2 hover:scale-90 rounded-full hover:bg-gray-600 transition"
                        >
                            <IconArrowLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-gray-900 px-2 hover:scale-90 py-2 rounded-full hover:bg-gray-600 transition"
                        >
                            <IconArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <h1 className="m-10 shadow-md pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-center md:text-start from-white via-gray-400 to-gray-600 bg-clip-text text-3xl font-extrabold leading-none text-transparent">
                    No need to travel-shine on the field with doorstep coaching!
                </h1>

                <div className='block md:hidden'>
                    <div className="flex justify-center -mt-5">
                        <button onClick={() => {
                            const element = document.getElementById('about');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }} className="p-2 px-5 bg-transparent bg-gradient-to-b from-gray-100 to-gray-600 text-black hover:scale-95 active:scale-75 duration-500 border-none font-bold rounded-full">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSec;

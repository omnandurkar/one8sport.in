import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import img1 from '../../../../public/main.jpg';
import img2 from '../../../../public/main2.jpg';
import img3 from '../../../../public/main3.jpg';

const HeroSec = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progresses, setProgresses] = useState([0, 0, 0]); 
    const duration = 9000; 

    const data = [
        { image: img1, title: 'Title 1', description: 'Ready to kickstart your journey to greatness.' },
        { image: img2, title: 'Title 2', description: 'The road to victory starts with the right coach.' },
        { image: img3, title: 'Title 3', description: 'Dreaming of scoring the winning goals.' },
    ];

    useEffect(() => {
        const fillProgress = setInterval(() => {
            setProgresses((prevProgresses) => {
                const newProgresses = [...prevProgresses];
                newProgresses[currentIndex] = Math.min(newProgresses[currentIndex] + (100 / (duration / 100)), 100);
                return newProgresses;
            });
        }, 100);

        const autoChange = setInterval(() => {
            handleNext();
        }, duration);

        return () => {
            clearInterval(fillProgress);
            clearInterval(autoChange);
        };
    }, [currentIndex]);

    const handleNext = () => {
        setProgresses((prevProgresses) => {
            const newProgresses = [...prevProgresses];
            newProgresses[currentIndex] = 100; 
            return newProgresses;
        });
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setProgresses((prevProgresses) => {
            const newProgresses = [...prevProgresses];
            newProgresses[currentIndex] = 0; 
            return newProgresses;
        });
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

   
    useEffect(() => {
        if (currentIndex === 0) {
            setProgresses([0, 0, 0]);
        }
    }, [currentIndex]);

    return (
        <div className='min-h-screen flex flex-col py-5 px-10 space-y-5 '>
            <h1 className="pointer-events-none underline whitespace-pre-wrap bg-gradient-to-b text-center md:text-start from-white via-gray-400 to-gray-600 bg-clip-text text-4xl font-extrabold leading-none text-transparent">
                One8sport
            </h1>

            <div className='min-h-screen -mt-5 flex flex-col justify-center items-center'>
                <div className="text-white flex flex-col items-center space-y-4">
                    <div className={`relative md:w-[26rem] w-64 md:h-[26rem] h-64 mb-5 transition-opacity duration-500 ease-in-out`}>
                        <Image
                            src={data[currentIndex].image}
                            alt={data[currentIndex].title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <p className={`text-lg text-center`}>
                        {data[currentIndex].description}
                    </p>
                    <div className="flex space-x-2 mt-4">
                        {data.map((_, index) => (
                            <div key={index} className="w-16 h-1 bg-gray-300 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-600 "
                                    style={{ width: `${progresses[index]}%`, transition: 'width 0.1s linear' }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={handlePrev}
                            className="bg-gray-900 px-2 py-2 hover:scale-90 rounded-full hover:bg-gray-600 transition"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-gray-900 px-2 hover:scale-90 py-2 rounded-full hover:bg-gray-600 transition"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <h1 className="m-10 shadow-md pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-center md:text-start from-white via-gray-400 to-gray-600 bg-clip-text text-3xl font-extrabold leading-none text-transparent">
                    No need to travel—shine on the field with doorstep coaching!
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

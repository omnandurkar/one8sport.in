import React from 'react';

const FAQCompData = [
    {
        title: 'What is One8sport?',
        description: 'One8sport is a sports Academy that offers football coaching at your doorstep, making it easy and convenient to learn and improve your skills.',
    },
    {
        title: 'Who can join One8sport?',
        description: 'Anyone interested in learning or improving their football skills can join, regardless of their experience level.',
    },
    {
        title: 'Where are the coaching sessions held?',
        description: 'The coaching sessions are held at various locations, including your home or nearby grounds, depending on what\'s most convenient for you.',
    },
    {
        title: 'What age groups do you cater to?',
        description: 'We offer coaching for all age groups, from young kids to adults, with programs tailored to each level.',
    },
    {
        title: 'Are there opportunities to participate in tournaments or competitions?',
        description: 'Yes, we provide opportunities to participate in tournaments and competitions to help you showcase and develop your skills.',
    },
    {
        title: 'How do I register for a coaching program?',
        description: 'You can easily register by visiting our website and contacting us through the provided information.',
    },
];


const FAQComp = () => {
    return (
        <div id='FAQComp' className='bg-gray-100 py-10'>

{/* <h1 className="text-3xl text-center text-gray-800 font-semibold">
                            FAQs
                        </h1> */}

            <section className="text-gray-400 body-font">
                <div className="container px-0 md:px-5 py-16 mx-auto">
                    <div className="flex flex-wrap space-y-4 px-5 w-full mb-20 flex-col items-center text-center">
                        <h1 className="text-3xl text-center text-black font-semibold">
                            FAQs
                        </h1>

                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-700 ">
                            Find answers to the most common questions about our services and how you can get involved.
                        </p>
                    </div>

                    {/* <div className="flex flex-wrap -m-4"> */}
                    <div className="flex  overflow-x-auto md:flex-wrap pb-10  ">
                        {FAQCompData.map((service, index) => (
                            <div
                                key={index}

                                className="xl:w-1/3 md:w-1/2 p-4    "
                            >
                                <div className="border  flex flex-col justify-center border-black  bg-white min-w-60 min-h-48 shadow-2xl border-opacity-60 p-6 rounded-2xl">
                                    {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            {service.icon}
                                        </svg>
                                    </div> */}
                                    <h2 className="text-md text-black font-bold title-font mb-2">{service.title}</h2>
                                    <p className="leading-relaxed text-gray-700 text-xs ">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </div>
    );
};


export default FAQComp;

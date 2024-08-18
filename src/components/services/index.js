import React from 'react';

const servicesData = [
    {
        title: 'Personalized Coaching',
        description: 'Custom training sessions that focus on individual skill development and game understanding.',
        icon: (
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        ),
    },
    {
        title: 'Group Training',
        description: 'Collaborative sessions emphasizing teamwork, communication, and strategy for groups like friends, families, or local teams.',
        icon: (
            <>

                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </>
        ),
    },
    {
        title: 'Fitness & Conditioning',
        description: 'Sport-specific exercises to boost stamina, agility, and strength for peak performance.',
        icon: (
            <>
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </>
        ),
    },
    {
        title: 'Skill Clinics',
        description: 'Specialized clinics targeting key football skills like dribbling, passing, and shooting.',
        icon: (
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
        ),
    },
    {
        title: 'Competitive Prep',
        description: 'Intensive programs designed to prepare players for matches, tournaments, and trials.',
        icon: (
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        ),
    },
    {
        title: 'Youth Programs',
        description: 'Fun and engaging sessions that introduce kids to football fundamentals, building a strong foundation.',
        icon: (
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        ),
    },
];

const Services = () => {
    return (
        <div id='services'>
            <h1 className="pointer-events-none mt-10 whitespace-pre-wrap bg-gradient-to-b  from-gray-100 via-gray-400 to-gray-800 bg-clip-text text-center lg:text-5xl md:text-3xl text-3xl font-extrabold leading-none text-transparent">
                Services
            </h1>

            <section className="text-gray-400 body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
                            At One8sport, we deliver top-tier football coaching directly to your doorstep, tailored to players of all ages and skill levels.<br /> Our services include:
                        </p>
                    </div>

                    {/* <div className="flex flex-wrap -m-4"> */}
                    <div className="flex overflow-x-auto md:flex-wrap ">
                        {servicesData.map((service, index) => (
                            <div
                                key={index}

                                className="xl:w-1/3 md:w-1/2 p-4"
                            >
                                <div className="border border-gray-700 min-h-60 border-opacity-75 p-6 rounded-lg">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            {service.icon}
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-white font-medium title-font mb-2">{service.title}</h2>
                                    <p className="leading-relaxed text-base">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="flex overflow-x-auto md:flex-wrap space-x-4">
                        {servicesData.map((service, index) => (
                            <div
                                key={index}
                                className=" flex-shrink-0 xl:w-1/3 md:w-1/2  p-4"
                            >
                                <div className="border border-gray-700 min-h-60 border-opacity-75 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            {service.icon}
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-white font-medium title-font mb-2">{service.title}</h2>
                                    <p className="leading-relaxed text-base">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </section>
        </div>
    );
};


export default Services;

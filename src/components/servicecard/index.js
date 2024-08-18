'use client'

import { useRef, useState } from "react"

const ServiceCard = (props) => {
    const { service, idx } = props;

    const descriptionElRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [descriptionHeight, setDescriptionHeight] = useState('0px');

    const handleOpenDescription = () => {
        const descriptionElH = descriptionElRef.current.childNodes[0].offsetHeight;
        setIsOpen(!isOpen);
        setDescriptionHeight(`${descriptionElH + 20}px`);
    };

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenDescription}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-black font-semibold">
                {service.title}
                {
                    isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                    )
                }
            </h4>
            <div
                ref={descriptionElRef} className="duration-300"
                style={isOpen ? { height: descriptionHeight } : { height: '0px' }}
            >
                <div>
                    <p className="text-gray-800">
                        {service.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default () => {
    const servicesData = [
        {
            title: 'Personalized Coaching',
            description: 'Custom training sessions that focus on individual skill development and game understanding.',
        },
        {
            title: 'Group Training',
            description: 'Collaborative sessions emphasizing teamwork, communication, and strategy for groups like friends, families, or local teams.',
        },
        {
            title: 'Fitness & Conditioning',
            description: 'Sport-specific exercises to boost stamina, agility, and strength for peak performance.',
        },
        {
            title: 'Skill Clinics',
            description: 'Specialized clinics targeting key football skills like dribbling, passing, and shooting.',
        },
        {
            title: 'Competitive Prep',
            description: 'Intensive programs designed to prepare players for matches, tournaments, and trials.',
        },
        {
            title: 'Youth Programs',
            description: 'Fun and engaging sessions that introduce kids to football fundamentals, building a strong foundation.',
        },
    ];

    return (
        <div id="services" className="py-10  relative bg-gradient-to-br from-gray-200 via-white to-gray-200pt-6 flex justify-center items-center rounded-md "
        // style={{
        //     background: "linear-gradient(152.92deg, rgba(132, 252, 192, 0.2) 4.54%, rgba(121, 249, 232, 0.17) 34.2%, rgba(132, 252, 192, 0.1) 77.55%)",
        // }}
        >
            <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 z-20">
                <div className="space-y-3 text-center">
                    <h1 className="text-3xl text-gray-800 font-semibold">
                        Our Services
                    </h1>
                    <p className="text-gray-600 max-w-lg mx-auto text-lg">
                        Explore the variety of services we offer to help you excel in football.
                    </p>
                </div>
                <div className="mt-14 max-w-2xl mx-auto">
                    {servicesData.map((service, idx) => (
                        <div key={idx}
                        //  data-aos="fade-down" data-aos-delay={`${500 + idx * 300}`}
                        >
                            <ServiceCard idx={idx} service={service} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

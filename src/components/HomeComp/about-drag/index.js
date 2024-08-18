'use client'

import { useRef, useState } from "react"

const AboutCard = (props) => {
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
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {service.title}
                {
                    isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={descriptionElRef} className="duration-300"
                style={isOpen ? { height: descriptionHeight } : { height: '0px' }}
            >
                <div>
                    <p className="text-gray-600 whitespace-pre-line">
                        {service.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default () => {
    const AboutData = [
        {
            title: 'Our Coaches',
            description: `AIFF D License Certification
            Grassroots Football Certification
            Coaching Experience
            Competitive Success
            `,
        },
        {
            title: 'Our Sports',
            description: `Football
            Badminton`,
        },
        {
            title: 'Popular Locations in Pune',
            description: `Sports Location in Magarpatta.
Sports Location in B+ Kawde Road.
Sports Location in Amanora.
Sports Location in Undri.
Sports Location in Kalyani Nagar.`,
        },
    ];

    return (
        <div className="relative pt-6 min-h-screen bg-gray-100 " style={{
            // background: "linear-gradient(152.92deg, rgba(132, 252, 192, 0.2) 4.54%, rgba(121, 249, 232, 0.17) 34.2%, rgba(132, 252, 192, 0.1) 77.55%)",
        }}>
            <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 z-20">
                <div className="space-y-3 text-center">
                    <h1 className="text-3xl text-gray-800 font-semibold">
                        About 
                    </h1>
                    <p className="text-gray-600 max-w-lg mx-auto text-lg">
                        Explore the variety of services we offer to help you excel in football.
                    </p>
                </div>
                <div className="mt-14 max-w-2xl mx-auto">
                    {AboutData.map((service, idx) => (
                        <div key={idx} data-aos="fade-down" data-aos-delay={`${500 + idx * 300}`}>
                            <AboutCard idx={idx} service={service} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

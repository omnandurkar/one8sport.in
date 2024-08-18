'use client'

import { useRef, useState } from "react"

const WhyChooseUsCard = (props) => {
    const { item, idx } = props;

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
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-black font-medium">
                {item.title}
                {
                    isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <p className="text-gray-700">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default () => {
    const WhyChooseUs = [
        {
            title: "Doorstep Coaching",
            description: "Personalized football coaching delivered directly to your location.",
            iconPath: "M22 12h-4l-3 9L9 3l-3 9H2",
        },
        {
            title: "Technical Skills",
            description: "Master essential techniques like dribbling, passing, and shooting.",
            iconPath: "M22 12h-4l-3 9L9 3l-3 9H2",
        },
        {
            title: "Tactical Awareness",
            description: "Learn to read the game and adapt strategies.",
            iconPath: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7",
        },
        {
            title: "Physical Fitness",
            description: "Improve strength, speed, and endurance.",
            iconPath: "M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572",
        },
        {
            title: "Mental Toughness",
            description: "Build confidence and focus.",
            iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
        }
    ];

    return (
        <div className="relative pt-6 bg-gradient-to-br from-gray-200 via-white to-gray-200pt-6 flex justify-center items-center rounded-md " style={{
            // background: "linear-gradient(152.92deg, rgba(132, 252, 192, 0.2) 4.54%, rgba(121, 249, 232, 0.17) 34.2%, rgba(132, 252, 192, 0.1) 77.55%)",
        }}>
            <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 z-20">
                <div className="space-y-3 text-center">
                    <h1 className="text-3xl text-gray-800 font-semibold">
                        What We Offer
                    </h1>
                    <p className="text-gray-600 max-w-lg mx-auto text-lg">
                        Discover the key reasons why our program stands out in developing your football skills.
                    </p>
                </div>
                <div className="mt-14 max-w-2xl mx-auto">
                    {WhyChooseUs.map((item, idx) => (
                        <div key={idx} 
                        // data-aos="fade-down" data-aos-delay={`${500 + idx * 100}`}
                        >
                            <WhyChooseUsCard idx={idx} item={item} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

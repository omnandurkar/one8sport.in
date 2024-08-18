'use client'

import { useRef, useState } from "react"

const TrainingProgCard = (props) => {
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            title: "Customized Training",
            description: "Tailored sessions to fit individual skill levels and goals.",
        },
        {
            title: "Professional Coaching",
            description: "Led by certified coaches with extensive experience.",
        },
        {
            title: "Holistic Development",
            description: "Focus on technical skills, tactical understanding, physical fitness, and mental resilience.",
        },
        {
            title: "Flexible Scheduling",
            description: "Training sessions can be scheduled at your convenience.",
        },
        {
            title: "State-of-the-Art Equipment",
            description: "Use of the latest football training tools and technology.",
        },
        {
            title: "Progress Tracking",
            description: "Regular assessments to monitor improvement and adjust training plans.",
        },
        {
            title: "Inclusive Environment",
            description: "Suitable for all ages and skill levels, from beginners to advanced players.",
        },
        {
            title: "Focus on Enjoyment",
            description: "Ensuring that training is both effective and enjoyable.",
        }
    ];


    return (
        <div className="relative bg-transparent pt-6 flex justify-center items-center rounded-md " style={{
            // background: "linear-gradient(152.92deg, rgba(132, 252, 192, 0.2) 4.54%, rgba(121, 249, 232, 0.17) 34.2%, rgba(132, 252, 192, 0.1) 77.55%)",
        }}>
            <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 z-20">
                
                <div className="mt-14 max-w-2xl mx-auto">
                    {WhyChooseUs.map((item, idx) => (
                        <div key={idx}
                        //  data-aos="fade-down" data-aos-delay={`${500 + idx * 100}`}
                         >
                            <TrainingProgCard idx={idx} item={item} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

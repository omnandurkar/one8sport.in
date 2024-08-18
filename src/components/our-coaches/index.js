import React from 'react'


const coachData = [
    {
        title: "AIFF D License Certification",
        description: "Ensuring top-level coaching expertise.",
        iconPath: "M22 12h-4l-3 9L9 3l-3 9H2"
    },
    {
        title: "Grassroots Football Certification",
        description: "Focused on developing young talent.",
        iconPath: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2",
        iconCircle: true
    },
    {
        title: "Coaching Experience",
        description: "Over two years of hands-on experience in coaching and mentoring players.",
        iconPath: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2",
        iconCircle: true
    },
    {
        title: "Competitive Success",
        description: "Proven track record in leading teams to victory.",
        iconPath: " M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7",
        iconCircle: true
    }
];


const CoachCard = ({ title, description, iconPath, iconCircle }) => (
    <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg min-h-40 border-gray-800 p-8 sm:flex-row flex-col">
            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d={iconPath}></path>
                    {iconCircle && <circle cx="12" cy="7" r="4"></circle>}
                </svg>
            </div>
            <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">{title}</h2>
                <p className="leading-relaxed text-base">{description}</p>
               
            </div>
        </div>
    </div>
);

const OurCoaches = () => {
    return (
        <>
            <h1 className="pointer-events-none mt-10 whitespace-pre-wrap bg-gradient-to-b from-gray-100 via-gray-400 to-gray-800 bg-clip-text text-center lg:text-5xl md:text-3xl text-3xl font-extrabold leading-none text-transparent">
                Our Coaches
            </h1>

            <p className='text-center p-5 leading-loose text-gray-300'>
                At One8sport Academy, our coaches are highly qualified and passionate about football. <br /> They hold:
            </p>

            {/* <CoverDemo /> */}

            <section className="text-gray-400 body-font">
                <div className="container px-5 py-16 mx-auto flex flex-wrap">
                    <div data-aos="fade-up" className="flex flex-wrap -m-4">
                        {coachData.map((coach, index) => (
                            <CoachCard
                                key={index}
                                title={coach.title}
                                description={coach.description}
                                iconPath={coach.iconPath}
                                iconCircle={coach.iconCircle}
                                
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurCoaches

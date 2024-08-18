import React from 'react'

const OurSports = () => {
    return (
        <>
            <h1 className="pointer-events-none mt-10 whitespace-pre-wrap bg-gradient-to-b  from-gray-100 via-gray-400 to-gray-800 bg-clip-text text-center lg:text-5xl md:text-3xl text-3xl font-extrabold leading-none text-transparent">
                Our Sports
            </h1>

            <>

                <section className="text-gray-400  body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                            <div data-aos="fade-up"  className="sm:w-1/2 mb-10 px-4  ">
                                <div className="rounded-lg h-[46rem]    overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src="https://cdn.pixabay.com/photo/2019/04/04/14/54/football-4103003_960_720.jpg" />
                                </div>
                                <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">FootBall</h2>
                                <p className="leading-relaxed text-base">Football is a very popular sport that is played at high schools, colleges, and professional stadiums.</p>
                                {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
                            </div>
                            <div data-aos="fade-up" data-aos-delay={1000} className="sm:w-1/2 mb-10 px-4">
                                <div className="rounded-lg h-[46rem]  overflow-hidden">
                                    <img alt="content" className="object-cover object-center h-full w-full" src="https://cdn.britannica.com/74/6174-004-5B2053A9/Darren-Hall-Britain-shuttlecock-competition-All-England-Badminton.jpg" />
                                </div>
                                <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Badminton</h2>
                                <p className="leading-relaxed text-base">Badminton is a game played by two or four players on a rectangular court with a high net across the middle.</p>
                                {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button> */}
                            </div>
                        </div>
                    </div>
                </section>

            </>

        </>
    )
}

export default OurSports
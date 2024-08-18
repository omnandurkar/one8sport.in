import TrainingProg from "@/components/HomeComp/training-prog";
import { StarsBackground } from "@/components/ui/stars-background";
import React from "react";


export function SpotlightPreview() {
    return (
        <div className=" w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">

            <div className="flex flex-col py-16 justify-center items-center">
                <div className="flex justify-center items-center">

                    <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-600 via-white to-gray-700 bg-opacity-50">
                            ONE8SPORT <br /> TRAINING PROGRAM
                        </h1>
                        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg md:max-w-full text-center mx-auto">
                            At One8sport, we offer a dynamic football training program designed to enhance players’ skills and foster a love for the game. Our program emphasizes technical proficiency, tactical awareness, physical fitness, and mental resilience, all within a supportive and engaging environment.

                        </p>
                    </div>
                </div>

                <TrainingProg />
            </div>

            <StarsBackground />

        </div>
    );
}

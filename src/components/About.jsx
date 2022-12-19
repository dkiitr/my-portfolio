import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="bg-gradient-to-b from-gray-800 to-black text-white w-full h-screen"
        >
            <div className="mx-auto p-4 max-w-screen-lg  w-full h-full flex flex-col justify-center">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        &lt; About /&gt;
                    </p>
                </div>
                <p className="text-xl mt-20">
                    I am a full-stack developer located in India. I love to
                    create simple yet beautiful websites with great user
                    experience. I mainly work with MERN stack in my projects. I
                    like trying new things and building great projects.
                </p>
                <br />
                <p className="text-xl">
                    I am an Indian Institute of Technology, Roorkee graduate and
                    being a student of one of the premier universities in India,
                    it is my constant endeavor to match its stature and give my
                    best to make a difference in whatever I pursue.
                </p>
                <br />
                <p className="text-xl">
                    I believe everything is an art when you put your
                    consciousness in it. I am an independent freelancer and read
                    books. I love to travel and watch series also. You can
                    connect with me via social links.
                </p>
            </div>
        </div>
    );
};

export default About;

import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../assets/heroImage.png";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
        >
            <div className="max-w-screen-lg h-full flex flex-col justify-center items-center mx-auto px-4 text-white md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-4xl font-bold sm:text-7xl">
                        I am a Full Stack Developer.
                    </h1>
                    <p className="text-gray-400 py-4 font-medium max-w-md">
                        I like to design and develop web applications using
                        different technologies like React, Tailwind, NextJS, NodeJS and
                        MongoDB etc.
                    </p> 
               
                <div>
                     <button className="group text-white w-fit rounded-md px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500">
                   <Link to="portfolio" duration={500} smooth={true}> Portfolio </Link>
                    <span className="group-hover:rotate-90">
                        <MdKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                </button> </div>
                </div>
                <div>
                    <img
                        src={HeroImage}
                        alt="my profile pic"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Home;

import React from "react";
import aceinfrasolutions from "../assets/portfolio/aceinfrasolutions.jpg";
import nextjsMeetups from "../assets/portfolio/nextjsMeetups.jpg";
import reactmeals from "../assets/portfolio/reactmeals.jpg";
import bookingapp from "../assets/portfolio/bookingapp.jpg";
import yelpcamp from "../assets/portfolio/yelpcamp.jpg";
import weatherApp from "../assets/portfolio/weatherApp.jpg";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: aceinfrasolutions,
            name: "Ace Infra Solutions",
            demo: "https://www.aceinfrasolutions.xyz/",
            code: "https://github.com/dkiitr/ace-infrasolutions/",
        },
        {
            id: 2,
            src: nextjsMeetups,
            name: "NextJS Meetups App",
            demo: "https://nextjs-meetups-app-omega.vercel.app/",
            code: "https://github.com/dkiitr/nextjs-meetups-app/",
        },
        {
            id: 3,
            src: reactmeals,
            name: "MealsApp",
            demo: "https://react-meals-dkiitr.netlify.app/",
            code: "https://github.com/dkiitr/react-meals-app/",
        },
        {
            id: 4,
            src: bookingapp,
            name: "BookingApp",
            demo: "http://react-booking-app-sepia.vercel.app/",
            code: "https://github.com/dkiitr/react-booking-app/",
        },
        {
            id: 5,
            src: yelpcamp,
            name: "YelpCamp",
            demo: "https://immense-hamlet-58806.herokuapp.com/",
            code: "https://github.com/dkiitr/camping-info/",
        },
        {
            id: 6,
            src: weatherApp,
            name: "Weather App",
            demo: "https://react-weather-app-3aiu.vercel.app/", 
            code: "https://github.com/dkiitr/react-weather-app/",
        },
    ];
    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
        >
            <div className="flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full">
                <div className="p-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        &lt; Portfolio /&gt;
                    </p>
                    <p className=" text-xl mt-8">
                        Check out some of my works right here:
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, name, demo, code }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg"
                        >
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className=" flex justify-center mt-4 font-bold items-center">
                                <p className="text-xl inline border-b-2 border-gray-500">{name} </p>
                            </div>

                            <div className=" flex justify-center items-center">
                                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a href={demo} target="_blank" rel="noopener noreferrer"> Demo </a>
                                </button>
                                <button className="px-6 m-4 duration-200 hover:scale-105">
                                    <a href={code}target="_blank" rel="noopener noreferrer"> Code </a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

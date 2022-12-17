import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "skills",
        },
        {
            id: 5,
            link: "contact",
        },
    ];
    return (
        <div className="flex w-full h-20 px-5 bg-black justify-between items-center text-white  fixed">
            <h1 className="text-4xl ml-2 font-signature cursor-pointer "><Link to="home" alt="home"> Deepak </Link> </h1>
            <ul className="hidden md:flex">
                {links.map(({ link, id }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 active:text-white duration-200 "
                    >
                        <Link
                            to={link}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active"
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="text-gray-500 z-10 cursor-pointer pr-4 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className="flex flex-col top-0 left-0 justify-center items-center absolute w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500  ">
                    {links.map(({ link, id }) => (
                        <li
                            key={id}
                            className="px-4 py-6 cursor-pointer capitalize text-4xl"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="active"
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;

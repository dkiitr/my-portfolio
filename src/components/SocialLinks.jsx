import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            link: (
                <>
                    LinkedIn <FaLinkedin size={30} />{" "}
                </>
            ),
            address: "https://www.linkedin.com/in/dkiitr15/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            link: (
                <>
                    GitHub <FaGithub size={30} />{" "}
                </>
            ),
            address: "https://github.com/dkiitr/",
        },
        {
            id: 3,
            link: (
                <>
                    Mail <HiOutlineMail size={30} />{" "}
                </>
            ),
            address: "mailto:dkiitr15@gmail.com",
        },
        {
            id: 4,
            link: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            address: "/resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];
    return (
        <div className="hidden xl:flex flex-col top-[35%]  left-0 fixed">
            <ul>
                {links.map(({ id, address, link, download, style }) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center hover:rounded-md w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] bg-gray-500" +
                            " " +
                            style
                        }
                    >
                        <a
                            className="flex justify-between items-center text-white w-full"
                            href={address}
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;

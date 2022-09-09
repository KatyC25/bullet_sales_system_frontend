import Link from "next/link";
import React from "react";
const Nav = () => {
    let links = [
        { name: "Home", link: "/" },
        { name: "Service", link: "/" },
        { name: "About", link: "/" },
        { name: "Contact", link: "/" },
        { name: "Blog s", link: "/" },

    ];
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            Nav
            <div className=' md:flex bg-white py-4'>
                <div className=" md: flex items-center justify-between bg-white py-4 md:px-10 px-7">
                    <div className=" font-bold text-2xl cursorpointer flex items bg-center font-[Poppins] 
                    text-gray-200"></div>
                    <span>

                    </span>

                    Bullet _Sales _System
                </div>
                <ul className="md: flex md:items-center">
                    {
                        links.map(link)=>(
                    <li key={Link.name} className='md: ml-8  text-xl'
                                <a href={Link.link} className='text gray-800 hover: text-gray-800 '>{Link.name}</a>
                </li>

                )
                    }
            </ul>

        </div>
        </div >

    )
}
export default Nav

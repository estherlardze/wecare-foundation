"use client";

import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/logo.png';
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setMenu(!menu);
  };

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Volunteer",
      link: "/volunteer",
    },
    {
      name: "Contact",
      link: "/contact",
    }
  ]

  return (
    <nav className="bg-white text-black fixed top-0 left-0 w-full transition-all duration-300 h-[68px] z-20">
      <section className="flex justify-between items-center pt-3 px-8">
        <Image src={logo} alt="logo" width={50} height={50} className="bg-black"/>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className={`text-[17px] font-semibold cursor-pointer hover:text-red-700 transition-all ${pathname === link.link? 'text-red-700 font-bold' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex gap-4">
          <Link
            href="/"
            className="text-white bg-red-700 px-4 py-2 rounded-3xl border-2 border-white font-[500] cursor-pointer uppercase hover:bg-white hover:text-red-700 hover:border-red-700 transition-all"
          >
            Donate now ❤
          </Link>
        </div>
        <div className="md:hidden" onClick={handleMenu}>
          {menu ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
        </div>
      </section>

      <div className={`fixed top-0 left-0 w-[60%] min-h-screen bg-white transition-transform duration-500 ease-in-out ${menu ? 'translate-x-0' : '-translate-x-full'} md:hidden z-10`}>
        <div className="flex flex-col items-start justify-center p-6 gap-y-4 pt-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className={`text-[17px] font-semibold cursor-pointer hover:text-red-700 transition-all ${pathname === link.link? 'text-red-700 font-bold' : ''}`}
              onClick={handleMenu}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/"
            className="text-white bg-red-700 px-4 py-2 rounded-3xl border-2 border-white w-fit font-[500] cursor-pointer uppercase hover:bg-white hover:text-red-700 hover:border-red-700 transition-all"
            onClick={handleMenu}
          >
            Donate now ❤
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

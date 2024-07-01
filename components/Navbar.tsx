"use client";

import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="bg-white text-black fixed top-0 left-0 w-full transition-all duration-300 h-[68px] z-20">
      <section className="flex justify-between py-5 px-8">
        <Image src={logo} alt="logo" width={50} height={50} />
        <div className="hidden md:flex gap-8">
          <Link
            href="/"
            className="text-[17px] font-semibold cursor-pointer hover:text-red-700 transition-all"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-[17px] font-semibold cursor-pointer hover:text-red-700 transition-all"
          >
            About us
          </Link>
          <Link
            href="/projects"
            className="text-[17px] font-semibold cursor-pointer hover:text-red-700 transition-all"
          >
            Projects
          </Link>
          <Link
            href="/volunteer"
            className="text-[17px] font-semibold cursor-pointer hover:text-red-700 transition-all"
          >
            Volunteer
          </Link>
          <Link
            href="/contact"
            className="text-[17px] font-semibold cursor-pointer hover:text-red-700 transition-all"
          >
            Contact
          </Link>
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

      <div className={`fixed top-0 left-0 w-[80%] min-h-screen bg-white transition-transform duration-500 ease-in-out ${menu ? 'translate-x-0' : '-translate-x-full'} md:hidden z-10`}>
        <div className="flex flex-col items-start justify-center p-6 gap-y-4 pt-12">
          <Link href="/" className="font-semibold cursor-pointer w-full border-b border-gray-300" onClick={handleMenu}>
            Home
          </Link>
          <Link href="/about-us" className="font-semibold w-full cursor-pointer border-b border-gray-300" onClick={handleMenu}>
            About us
          </Link>
          <Link href="/projects" className="font-semibold cursor-pointer w-full border-b border-gray-300" onClick={handleMenu}>
            Projects
          </Link>
          <Link href="/volunteer" className="font-semibold cursor-pointer w-full border-b border-gray-300" onClick={handleMenu}>
            Volunteer
          </Link>
          <Link href="/contact" className="font-semibold cursor-pointer w-full border-b border-gray-300" onClick={handleMenu}>
            Contact
          </Link>
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

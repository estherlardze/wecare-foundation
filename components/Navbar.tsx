"use client";

import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/logo.png'

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

      {menu && (
        <div className="w-full bg-white fixed md:hidden top-[70px] left-0 justify-center items-center transition-all duration-700">
          <div className="flex justify-center items-left pl-6 flex-col h-fit text-lg sm:text-xl gap-y-4">
            <Link href="/" className="font-semibold cursor-pointer">
              Home
            </Link>
            <Link href="/about-us" className="font-semibold cursor-pointer">
              About us
            </Link>
            <Link
              href="/"
              className="font-semibold cursor-pointer"
            >
              Projects
            </Link>
            <Link href="/" className="font-semibold cursor-pointer">
              Voluteer
            </Link>
            <Link href="/contact" className="font-semibold cursor-pointer">
              Contact
            </Link>

            <Link
            href="/"
            className="text-white bg-red-700 px-4 py-2 rounded-3xl border-2 border-white w-fit font-[500] cursor-pointer uppercase hover:bg-white hover:text-red-700 hover:border-red-700 transition-all"
          >
            Donate now ❤
          </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

'use client'

import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/logo.png'
import AOS from  "aos";
import "aos/dist/aos.css";


const Footer = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <footer className="bg-black/90 text-white py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-10 justify-between border-b border-gray-600 gap-8 pb-6">

          <div className="col-span-10 sm:col-span-6 lg:col-span-3 mb-6 md:mb-0 " data-aos="fade-right">
            <Image src={logo} alt="logo" width={80} height={80}/>
            <p className="text-gray-400 text-wrap">
              We are curious, passionate, and committed to helping nonprofits
              learn and grow. Donate now!
            </p>
            <button className="px-4 py-2 text-sm mt-3 w-fit uppercase bg-red-700 rounded-3xl border border-white hover:bg-yellow-600 transition-all duration-500">
              Donate now ❤
            </button>
          </div>

          <div className="col-span-10 sm:col-span-4 lg:col-span-2 mb-6 md:mb-0" data-aos="zoom-in">
            <h4 className="text-xl font-bold mb-4">CONTACTS</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="/about-us" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/volunteer" className="hover:text-white">
                  Volunteer
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
            </ul>
           
          </div>

          <div className="col-span-10 sm:col-span-6 lg:col-span-3 mb-6 md:mb-0" data-aos="zoom-in">
            <h4 className="text-xl font-bold mb-4">NONPROFITS</h4>
            <p className="text-gray-400">GW-0101-2291 Amasaman,Accra</p>
            <p className="text-gray-400 my-1">Email: wchf.org@gmail.com</p>
            <p className="text-gray-400">Phone: +233503614304 / +233 20 668 9419</p>
          </div>

          <div className="col-span-10 sm:col-span-4 lg:col-span-2 mb-6 md:mb-0" data-aos="fade-left">
            <h4 className="text-xl font-bold mb-4">FOLLOW US</h4>

            <div className="flex gap-4">
            <Link
                href="https://facebook.com/wchfghana"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="https://twitter.com/wchfghana"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://instagram.com/wchfghana"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com/wchfghana"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedinIn size={20} />
              </Link>
            </div>
              
          </div>
        </div>

        <div className="mt-10  text-gray-400 flex flex-col md:flex-row justify-start sm:justify-between gap-5 text-sm items-start sm:items-center">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center" data-aos="fade-right">
            <p>Terms of use</p>
            <div className="w-[1px] h-4 bg-gray-400 hidden sm:block"></div>
            <p>Privacy Environmental Policy</p>
          </div>
          <p data-aos="fade-left">&copy; 2023 We Care Health Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

    
  );
};

export default Footer;

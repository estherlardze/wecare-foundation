import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/logo.png'

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between border-b border-gray-600 pb-6">

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Image src={logo} alt="logo" width={80} height={80}/>
            <p className="text-gray-400">
              We are curious, passionate, and committed to helping nonprofits
              learn and grow. Donate now!
            </p>
            <button className="px-4 py-3 mt-6 uppercase bg-red-700 rounded-3xl border border-white hover:bg-yellow-600 transition-all">
              Donate now ❤
            </button>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-4">CONTACTS</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
            <div className="flex gap-4">
            <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-4">NONPROFITS</h4>
            <p className="text-gray-400">123 Street Name, City, State, 12345</p>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-4">DONORS</h4>

            <div className="flex flex-col space-x-4">
            <p className="text-gray-400">Give or Redeem Gift Cards</p>
            <p className="text-gray-400">Donate in Honor</p>
            <p className="text-gray-400">Project of the Month Club</p>
            <p className="text-gray-400">Start a Fundraiser</p>
            <p className="text-gray-400">Donor Resources</p>
              
            </div>
          </div>
        </div>

        <div className="mt-10  text-gray-400 flex flex-col md:flex-row justify-start sm:justify-between gap-5 text-sm items-start sm:items-center">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <p>Terms of use</p>
            <div className="w-[1px] h-4 bg-gray-400 hidden sm:block"></div>
            <p>Privacy Environmental Policy</p>
          </div>
          <p>&copy; 2023 We Care Health Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

    
  );
};

export default Footer;

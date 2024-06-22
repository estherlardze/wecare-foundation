import React from "react";
import { CgArrowRight } from "react-icons/cg";
import donation from "../../public/DONATION-2.png";
import Image from "next/image";
import Link from "next/link";

const Donation = () => {
  return (
    <section className="w-[86%] mx-[7%] my-[70px] text-black/85">
      <h1
        className="uppercase text-xl text-center font-bold text-black/80 mb-3 overflow-hidden"
        data-aos="fade-up"
      >
        Donations
      </h1>
      <h3
        className="capitalize text-center text-xl font-[500]"
        data-aos="fade-up"
      >
        What we do
      </h3>

      <div className="grid grid-cols-2 gap-8 mt-10 justify-center items-center">
        <div
          className="col-span-2 md:col-span-1 flex flex-col gap-6"
          data-aos="fade-right"
        >
          <h1 className="text-xl sm:text-2xl font-semibold leading-[50px]">
            Discover out transformative projects that aim to bring about
            positive change and improve peoples lives. <br /> Join us to make a
            difference now!
          </h1>
          <Link
            href="/projects"
            className="px-4 py-2 flex gap-4 w-fit bg-white cursor-pointer duration-300 text-red-700 rounded border-2 border-red-700 hover:text-white hover:border-black hover:bg-black transition-all"
          >
            <button className="font-semibold uppercase">Learn More</button>
            <CgArrowRight size={30} />
          </Link>
        </div>

        <div className="col-span-2 md:col-span-1" data-aos="fade-left">
          <Image src={donation} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Donation;

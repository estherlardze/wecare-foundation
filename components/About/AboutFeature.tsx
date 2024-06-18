import React from "react";
import about from "../../public/about-us_01.jpg";
import about1 from "../../public/about-us_02.jpg";
import Image from "next/image";

const AboutFeature = () => {
  return (
    <section className="my-[70px] text-black/90 grid grid-cols-2 gap-10 md:gap-5 mx-[7%] w-[86%]">
      <div className="text-left flex flex-col gap-7 col-span-2 md:col-span-1">
        <h1 className="text-2xl sm:text-2xl font-semibold">
          SAFE + EASY DONATIONS
        </h1>
        <h3 className="text-2xl sm:text-3xl font-semibold">
          Helping Today. Helping Tommorow
        </h3>
        <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ea accusamus veniam impedit neque necessitatibus odit non nulla adipisci ratione doloribus minima illum repudiandae explicabo, asperiores placeat a!
        </p>
        <button className="px-4 py-2  w-fit uppercase bg-white font-semibold text-red-700 rounded-3xl border-2 border-red-700 hover:text-white hover:border-black hover:bg-black transition-all">
          Learn More
        </button>
      </div>

      <div className="col-span-2 md:col-span-1 flex md:flex-row flex-col gap-7">
        <Image src={about} alt="about" />
      </div>
    </section>
  );
};

export default AboutFeature;

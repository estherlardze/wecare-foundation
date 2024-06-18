import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";


export type CardProps ={
    name: string;
    position: string;
    image:  StaticImageData;
    content: string;
}


const Card = ({name, position, image, content} : CardProps) => {
  return (
    <section>
      <div className="bg-white w-[300px] rounded-md h-fit p-4 shadow-md">
        <q className="text-lg text-gray-700  leading-10">
          {content}
        </q>
      </div>
      <div className="flex gap-4 mt-6">
        <Image
          src={image}
          alt="ceo"
          width={50}
          height={100}
          className="rounded-[30px]"
        />
        <div>
          <h1 className="text-xl text-black/80 font-semibold">
           {name}
          </h1>
          <p className="uppercase text-red-700">{position}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;

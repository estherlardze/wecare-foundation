import React from "react";
import Image from "next/image";
import bank from "../../public/bank.jpg";
import mobile from "../../public/mobile.jpg";

const Transfer = () => {
  return (
    <div className="w-[86%] mx-[7%] my-[100px]  text-black/80" id='donate'>
      <div className="" data-aos="fade-up">
        <h1 className="text-center text-red-700 text-2xl sm:text-3xl font-bold">
          YOUR LITTLE CAN SAVE A LIFE.
        </h1>
        <h1 className="text-center text-red-700 text-xl sm:text-2xl font-bold mt-3">
          DONATE HERE
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6">
        <div className="col-span-2 sm:col-span-1" data-aos="fade-right">
            <p className="underline mb-6">MOBILE MONEY</p>
            <p>0557129744</p>
            <p className="my-4">John Acquah Newman</p>
            <p>Reference : WCHF DONATION</p>
          <Image src={mobile} alt="mobile" width={400} height={400} className="mt-4"/>
        </div>
        
        <div className="col-span-2 sm:col-span-1" data-aos="fade-left">
          <p className="underline mb-6">BANK TRANSFER</p>
          <p>
            Account Name:{" "}
            <span className="font-semibold">
              KOFI M. A. AMO + JOHN T. A. NEWMAN
            </span>
          </p>
          <p className="my-4">Account No: 1400006564927</p>
          <p>Branch : Asafo</p>
          <Image src={bank} alt="mobile" width={300} height={300} className="mt-4"/>
        </div>
      </div>
    </div>
  );
};

export default Transfer;

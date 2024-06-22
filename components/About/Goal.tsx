import React from "react";
import { goals } from "../../utils/data";

const Goal = () => {
  return (
    <div className="bg-hero2 bg-cover bg-no-repeat bg-center w-full h-fit md:h-[100vh] py-12 flex justify-center items-center flex-col">
      <div className=" mx-[7%] 2xl:w-[1536px] 2xl:mx-auto w-[86%] h-fit my-4">
        <div className="my-12 flex flex-col justify-center items-center text-black/80">
          <h1 className="text-2xl font-semibold">HELP IS OUR GOAL</h1>
          <h3 className="text-4xl font-bold mt-3 text-center">What Make Us Different</h3>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {goals.map((goal) => (
            <article
              key={goal.id}
              data-aos="zoom-in"
              className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center text-black/80 hover:bg-white hover:rounded-3xl hover:shadow-2xl py-6 cursor-pointer"
            >
              <h1 className="">
                <goal.icon
                  size={50}
                  className="p-2 bg-orange-400/50 text-orange-700 rounded-full"
                />
              </h1>
              <h1 className="font-bold text-2xl my-6 text-black/85">
                {goal.title}
              </h1>
              <p className="text-center">{goal.content}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goal;

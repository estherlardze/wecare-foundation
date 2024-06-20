import React from "react";
import { features } from "../../utils/data";

const Features = () => {
  return (
    <div className="bg-black/5">
      <section className="my-[70px] text-black/90 flex flex-col md:flex-row gap-10 md:gap-5 mx-[7%] w-[86%] overflow-hidden">
        <div className="text-left flex flex-col gap-7" data-aos="fade-right">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            We aim at eliminating the health deficits in Ghana in order for
            everyone to live healthy lives.
          </h1>
          <button className="px-4 py-2 duration-300 w-fit uppercase bg-white font-semibold text-red-700 rounded-3xl border-2 border-red-700 hover:text-white hover:border-black hover:bg-black transition-all">
            Donate now ❤
          </button>
        </div>
        
        <div>
          {features.map((feature) => (
            <article key={feature.id} data-aos="fade-left" className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-3">
              <h1>
                <feature.icon size={50} />
              </h1>
              <div>
                <h1 className="text-xl font-bold mb-3">{feature.title}</h1>
                <p>{feature.content}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;

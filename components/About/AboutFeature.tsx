import React from "react";
import about from "../../public/about-us_01.jpg";
import about1 from "../../public/about-us_02.jpg";
import Image from "next/image";

const AboutFeature = () => {
  return (
    <section className="my-[70px] text-black/90  md:gap-5 mx-[7%] w-[86%] 2xl:w-[1536px] 2xl:mx-auto">
     <div className="text-left flex flex-col gap-7 col-span-2 md:col-span-2">
        <h1 className="text-2xl sm:text-2xl font-semibold" data-aos="fade-up">
          SAFE + EASY DONATIONS
        </h1>
        <h3 className="text-2xl sm:text-3xl font-semibold" data-aos="fade-up">
          Helping Today. Helping Tommorow
        </h3>
        <p data-aos="fade-up">
         We Care Health Foundation(WCHF) is a legally registered Nonprofit Organization, under THE COMPANIES ACT, 2019 (ACT 992) Registrar-General&apos;s Department and incorporated on November 1,2021. </p>
         <p data-aos="fade-up">On the sunny morning of Wednesday, August 4,2021, the idea of We Care Health Foundation was birth from a conversation among three passionate and hardworking gentlemen about what they could do to help society upon completing senior high school. The trio namely John Acquah, Amo Kofi and Bright Akotua drafted their plan and vision for the foundation and began to preach the message of their newly birthed idea to their colleagues, juniors and teachers. The idea was largely welcomed even though a chunk of their colleagues didn’t believe in their capability to persist and see their dream materialize. Upon completing senior high school started the registration process.</p>
         <p data-aos="fade-up">The foundation was officially incorporated founded on November 1,2021 and subsequently launched on November 12,2021. In line the UN’s Sustainable Development Goal Three (3) of ensuring health and well-being for all, including a bold commitment to end the epidemics of AIDS, tuberculosis, malaria and other communicable diseases by 2030.The aim of the NGO is to provide health assistance to persons particularly children due to their innocence and vulnerability in society. The foundation seeks to attend to the aid of children with complicated medical conditions such as hydrocephalus, brain tumor, septic arthritis just to mention a few. The foundation is made up of over hundred students ,most of which are currently in tertiary institutions.</p>
        <button className="px-4 py-2  w-fit uppercase bg-white font-semibold text-red-700 rounded-3xl border-2 border-red-700 hover:text-white hover:border-black hover:bg-black transition-all">
          Learn More
        </button>
      </div>


     <section className="grid grid-cols-2 items-center gap-10 my-16">
     
       <div className="col-span-2 md:col-span-1" data-aos="fade-right">       
       <h1 className="text-2xl sm:text-2xl font-semibold">
          Our Mission
        </h1>

        <div className="mt-4">
        <h3 className="text-lg font-semibold">
          Mission
        </h3> 
        <p>To aim at eliminating the health deficits in Ghana in order for everyone to live healthy lives.</p>      
         </div>
     

       <div>
        <h3 className="text-lg font-semibold">
          Vision
        </h3> 
        <p>To aim at eliminating the health deficits in Ghana in order for everyone to live healthy lives.</p>       
        </div>
        </div>

        <div className="col-span-2 md:col-span-1  gap-7" data-aos="fade-left">
        <Image src={about} alt="about" />
      </div>
     </section>

      
    </section>
  );
};

export default AboutFeature;

import React from "react";

const Header = () => {
  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-center mt-[60px]  h-[60vh] sm:h-[100vh] w-full 2xl:h-[60vh] bg-fixed">
      <div className="bg-black/50 h-[60vh] sm:h-[100vh] w-full 2xl:h-[60vh] text-white gap-4">
        <div className="w-[90%] md:w-[60%] mx-auto flex flex-col items-center justify-center h-[60vh] sm:h-[100vh] 2xl:h-[60vh]">
          <h1 className="font-bold text-2xl sm:text-3xl text-center mb-4 font-slang lg:text-4xl">
            We are creating a brighter tomorrow
          </h1>
          <p className="text-3xl sm:text-4xl md:text-6xl text-center font-bold my-6 lg:text-7xl">
            Make someones life by giving of yours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

const Header = () => {
  return (
    <div className="bg-hero bg-cover bg-no-repeat bg-center mt-[60px]  h-[60vh] sm:h-[100vh] w-full 2xl:h-[60vh] bg-fixed">
      <div className="bg-black/50 h-[60vh] sm:h-[100vh] text-white 2xl:h-[60vh] gap-4 w-full">
        <div className="w-[86%] mx-[7%] flex flex-col items-center justify-center h-[100vh]">
          <h1 className="font-bold text-xl sm:text-2xl mb-4">
            We are creating a brighter tomorrow
          </h1>
          <p className="text-2xl sm:text-3xl md:text-6xl text-center font-bold my-6">
            Make someones life by giving of yours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

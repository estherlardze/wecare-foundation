import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import classNames from 'classnames';

type HeadingProps = {
  heading: string,
  className?: string
};

const Header = ({ heading, className }: HeadingProps) => {
  const headerClasses = classNames(
    "bg-contact bg-cover bg-no-repeat bg-center mt-[60px] w-full h-[70vh]",
    className
  );

  return (
    <div className={headerClasses}>
      <div className="bg-black/20 w-full h-[70vh] flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-5xl">{heading}</h1> <br />
        <div className="flex gap-1 items-center group">
          <Link
            href="/"
            className="uppercase text-white group-hover:text-black font-semibold transition-all"
          >
            Home
          </Link>
          <MdKeyboardArrowRight size={26} className="text-white" />
          <p className="uppercase font-semibold group-hover:text-white transition-all">
            {heading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

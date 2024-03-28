import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-8 md:mb-16 mb-8">
        <img className="object-contain mb-8 w-44 h-44" src={logo} />
        <h3 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
          react art
        </h3>
        <p className="text-stone-500">A community of artists and art-lovers </p>
      </div>
    </>
  );
};

export default Header;

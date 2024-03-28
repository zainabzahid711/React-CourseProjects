import React from "react";
const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py2 font-semibold uppercase rounded text-stone-400 bg-amber-300 hover:bg-amber-500"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

//px==leftand right
//py==top, bottom

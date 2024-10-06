import React from "react";

interface BigButtonProps {
  Buttonname: string;
  className?: string;
}

const Bigbutton: React.FC<BigButtonProps> = ({ Buttonname, className }) => {
  return (
    <button
      style={{ fontSize: "48px" }}
      className={`lg:w-3/4 h-32 bg-blue-500 text-white font-bold rounded  ${className}`}
    >
      {Buttonname}
    </button>
  );
};

export default Bigbutton;

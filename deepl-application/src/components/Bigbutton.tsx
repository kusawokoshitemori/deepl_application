import React from "react";

interface BigButtonProps {
  Buttonname: string;
}

const Bigbutton: React.FC<BigButtonProps> = ({ Buttonname }) => {
  return (
    <button className="bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300 ease-in-out w-1/2 text-4xl ">
      {Buttonname}
    </button>
  );
};

export default Bigbutton;

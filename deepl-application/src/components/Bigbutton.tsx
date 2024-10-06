import React from "react";

interface BigButtonProps {
  Buttonname: string;
}

const Bigbutton: React.FC<BigButtonProps> = ({ Buttonname }) => {
  return <button>{Buttonname}</button>;
};

export default Bigbutton;

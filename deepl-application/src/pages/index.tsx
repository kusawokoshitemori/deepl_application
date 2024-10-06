import React from "react";
import Link from "next/link";
import Bigbutton from "../components/Bigbutton";

const Home: React.FC = () => {
  return (
    <>
      <Link href="/sample">サンプルページへ飛ぶ</Link>
      <Bigbutton Buttonname="クリックしてください" />
    </>
  );
};

export default Home;

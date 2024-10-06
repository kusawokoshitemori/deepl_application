import React from "react";
import Link from "next/link";
import Image from "next/image";
import Bigbutton from "../components/Bigbutton";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-slate-200 h-screen">
      <Link href="/sample">サンプルページへ飛ぶ</Link>
      {/* ここに画像を入れたい */}
      <Image
        src="/images/proverb_title.png" // publicフォルダからのパス
        alt="説明文" // 画像の代替テキスト
        width={650} // 画像の幅
        height={300} // 画像の高さ
      />
      <Bigbutton Buttonname="ゲーム開始" className="text-lime-200 m-4" />
      <Bigbutton Buttonname="ことわざ追加" className="m-4" />
      <Bigbutton Buttonname="設定" className="m-4" />
    </div>
  );
};

export default Home;

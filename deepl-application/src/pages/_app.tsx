// pages/_app.tsx
import "../styles/globals.css"; // グローバルCSSのインポート
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;

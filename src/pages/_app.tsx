import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useAnalytics } from "../hooks";

function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics();
  return <Component {...pageProps} />;
}

export default MyApp;

import "../styles/global.scss";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

// eslint-disable-next-line import/extensions
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

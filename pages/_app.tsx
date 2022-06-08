import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "../store/Store";
import Notification from "../components/Notification/Notification";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="relative">
        <Notification />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;

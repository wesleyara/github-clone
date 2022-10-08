import "../styles/globals.css";
import "../styles/typography.css";

import "regenerator-runtime/runtime.js";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { LayoutProvider } from "../layout/LayoutProvider";
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <LayoutProvider>
          <Component {...pageProps} />
          <ToastContainer autoClose={3000} />
        </LayoutProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;

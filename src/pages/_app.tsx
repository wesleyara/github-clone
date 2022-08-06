import "../styles/globals.css";
import "../styles/typography.css";

import "regenerator-runtime/runtime.js";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "../context/AuthContext";
import { UserProvider } from "../context/UserContext";
import { LayoutProvider } from "../layout/LayoutProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AuthProvider>
        <UserProvider>
          <LayoutProvider>
            <Component {...pageProps} />
            <ToastContainer autoClose={3000} />
          </LayoutProvider>
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;

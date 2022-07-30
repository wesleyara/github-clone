import "../styles/globals.css";
import "../styles/typography.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

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
          </LayoutProvider>
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;

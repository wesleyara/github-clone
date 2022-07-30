import "../styles/globals.css";
import "../styles/typography.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { LayoutProvider } from "../layout/LayoutProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </ThemeProvider>
  );
}

export default MyApp;

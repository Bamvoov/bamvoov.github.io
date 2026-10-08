import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "dark" : "light"
    );
  }, [theme]);

  return (
    <>
      {/* App content */}
      <Component {...pageProps} theme={theme} setTheme={setTheme} />
    </>
  );
}

export default MyApp;

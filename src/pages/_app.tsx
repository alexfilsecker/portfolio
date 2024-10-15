import { ThemeProvider } from "@mui/material";
import { type AppProps } from "next/app";

import theme from "@/style/theme";

import "../style/global.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;

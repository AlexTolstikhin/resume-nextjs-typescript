import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme: Theme = createTheme();


function MyApp({ Component, pageProps }: AppProps) {
  const customTheme = createTheme({});
  return (
    <ThemeProvider theme={customTheme}>
      <Component id="root" {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp

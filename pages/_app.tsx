import '../styles/globals.css'
import '../styles/navStyle.css';
import '../styles/frontStyle.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import ThemeProvider from '../themeContext';


function MyApp({ Component, pageProps }: AppProps) {
  return ( 
   <ThemeProvider>
   <Layout>
    <Component {...pageProps} />
   </Layout>
   </ThemeProvider>
  )
}

export default MyApp

import '../styles/globals.css'
import '../styles/navStyle.css'
import '../styles/frontStyle.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import ThemeProvider from '../themeContext'
import { motion } from 'framer-motion'
import Head from 'next/head'
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: { opacity: 0, x: -200, y: 0 },
          pageAnimate: { opacity: 1, x: 0, y: 0 },
        }}
        exit={{ opacity: 0, x: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
          name="description"
          content="Sergey Bolotnikov projects portfolio. Web developer. Javascript React JS. MongoDB. Node JS. Next JS. Express JS"
        />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </ThemeProvider>
  )
}

export default MyApp

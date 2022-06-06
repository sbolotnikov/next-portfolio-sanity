import '../styles/globals.css'
import '../styles/navStyle.css'
import '../styles/frontStyle.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import ThemeProvider from '../themeContext'
import { motion } from 'framer-motion'
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </ThemeProvider>
  )
}

export default MyApp

import '@css/tailwind.css'
import '@css/prism.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Analytics from 'src/components/analytics'
import LayoutWrapper from 'src/components/LayoutWrapper'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

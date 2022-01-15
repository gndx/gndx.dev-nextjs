import '@css/tailwind.css'
import '@css/prism.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Analytics from 'src/components/analytics'
import LayoutWrapper from 'src/components/LayoutWrapper'

import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "../config/web3";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Web3ReactProvider getLibrary={getLibrary}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Analytics />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </Web3ReactProvider>
    </ThemeProvider>
  )
}

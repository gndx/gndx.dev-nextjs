import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link data-react-helmet="true" rel="canonical" href="https://gndx.dev/" />
          <link data-react-helmet="true" href="favicon.png" rel="icon" type="image/png" />
          <link data-react-helmet="true" rel="manifest" href="/manifest.json" />
          <meta data-react-helmet="true" name="google" content="notranslate" />
          <meta data-react-helmet="true" name="description"
            content="Foundation Layer at @platzi - Microsoft MVP - Lead at Developer Circles from Facebook - I teach React &amp;amp; Svelte." />
          <meta data-react-helmet="true" content="#333333" name="theme-color" />
          <meta data-react-helmet="true" name="description"
            content="Foundation Layer at @platzi - Microsoft MVP - Lead at Developer Circles from Facebook - I teach React &amp;amp; Svelte." />
          <meta data-react-helmet="true" name="twitter:card" content="summary_large_image" />
          <meta data-react-helmet="true" name="twitter:site" content="@gndx" />
          <meta data-react-helmet="true" name="twitter:creator" content="@gndx" />
          <meta data-react-helmet="true" name="twitter:title" content="Oscar Barajas Tavares" />
          <meta data-react-helmet="true" name="twitter:description"
            content="Foundation Layer at @platzi - Microsoft MVP - Lead at Developer Circles from Facebook - I teach React &amp;amp; Svelte." />
          <meta data-react-helmet="true" name="twitter:image" content="https://arepa.s3.amazonaws.com/og-gndx.png" />
          <meta data-react-helmet="true" property="og:title" content="Oscar Barajas Tavares" />
          <meta data-react-helmet="true" property="og:description"
            content="Foundation Layer at @platzi - Microsoft MVP - Lead at Developer Circles from Facebook - I teach React &amp;amp; Svelte." />
          <meta data-react-helmet="true" property="og:image" content="https://arepa.s3.amazonaws.com/og-gndx.png" />
          <meta data-react-helmet="true" property="og:url" content="https://gndx.dev/" />
          <meta data-react-helmet="true" property="og:site_name" content="Oscar Barajas Tavares" />
          <meta data-react-helmet="true" property="og:locale" content="es_ES" />
          <meta data-react-helmet="true" property="og:type" content="article" />
          <meta data-react-helmet="true" property="fb:app_id" content="285513459106600" />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link type="text/plain" rel="author" href="https://gndx.dev/humans.txt" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Architecture L anding Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Adamina&family=Gentium+Plus:ital@1&family=Quicksand:wght@300&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
  
}

export default MyApp

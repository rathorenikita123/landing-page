import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../src/components/Navbar/Navbar'
import Main from '../src/components/Main/Main'
import Overview from '../src/components/Overview/Overview'
import Howitworks from '../src/components/Howitworks/Work'
import Gallery from '../src/components/Gallery/Gallery'
import Contact from '../src/components/Contact/Contact'


export default function Home() {
  return (
    <>
      <Navbar/> 
      <Main/>
      <Overview/>
      <Howitworks/>
      <Gallery/>
      <Contact/>
    </>
   
  )
}

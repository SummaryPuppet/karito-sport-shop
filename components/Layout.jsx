import Head from "next/head"
// import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout ({ title, mainStyle, children }){
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Karito sport shop"/>
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      
      <Navbar />

      <main className={mainStyle}>
        {children}
      </main>

      {/* <Footer /> */}
    </>
  )
}

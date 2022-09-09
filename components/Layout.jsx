import Head from "next/head"

export default function Layout ({ title, mainStyle, children }){
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Karito sport shop"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mainStyle}>
        {children}
      </main>
    </>
  )
}

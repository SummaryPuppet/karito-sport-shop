import HomeItems from "../components/HomeItems";
import Layout from "../components/Layout";
import Search from "../components/Search"

export default function Home() {
  return (
    <Layout title="Karito Sport" mainStyle="h-screen bg-slate-50">
      <h1 className="text-5xl font-bold text-center">Karito Sport</h1>
      <Search />
      <HomeItems />
    </Layout>
  )
}


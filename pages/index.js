import HomeItems from "../components/HomeItems";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Karito Sport" mainStyle="flex flex-col gap-4 h-screen bg-slate-50">
      <HomeItems />
    </Layout>
  )
}


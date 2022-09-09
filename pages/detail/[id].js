import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function Detail() {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch(`/api/search?id=${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return null;

  const { title, description, img, price } = product;

  return (
    <Layout title={title} mainStyle="relative h-screen bg-slate-50">
      <article className="h-full bg-orange-100 grid lg:grid-cols-2 gap-4">
        <Image src={img} alt={title} width="600" height="400" />
        
        <section className="flex flex-col p-1 gap-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h2 className="text-xl">Detalles del producto</h2>
          <p className="text-g">{description}</p>
          <p className="text-red-600 text-md">{price}</p>
        </section>
      </article>
    </Layout>
  );
}

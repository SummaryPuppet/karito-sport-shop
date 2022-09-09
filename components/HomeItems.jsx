import { useEffect, useState } from "react"
import Item from "./Item"

export default function HomeItems(){
  const [homeProducts, setHomeProducts] = useState([])

  useEffect(()=>{
    fetch("/api/allProducts")
      .then(res => res.json())
      .then(setHomeProducts)
  },[])

  return (
    <section className="px-4 grid lg:grid-cols-2 place-content-center gap-4">
      { homeProducts.map((result)=>(
        <Item key={result.id} {...result}  />
      )) }
    </section>
  )
}

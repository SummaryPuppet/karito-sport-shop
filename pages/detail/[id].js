import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Detail (){
  const [product, setProduct] = useState()
  const router = useRouter()
  const { id } = router.query

  useEffect(()=>{
    if (!id) return null

    fetch(`/api/search?id=${id}`)
      .then(res => res.json())
      .then(setProduct)
  },[id])

  if (!product) return null

  return (
    <>
    <Link href="/">
      <a>ir al inicio</a>
    </Link>
    </>
  )
}

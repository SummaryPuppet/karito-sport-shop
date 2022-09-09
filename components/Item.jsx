import Image from "next/image"

export default function Item ({ title, description, img, price }){
  return (
    <article className="py-2 text-center shadow-2xl w-80">
      <header>
        <Image src={img} width="200" height="300" alt={description} />
        <h2 className="text-2xl font-bold break-words">{title}</h2>
      </header>
      <p className="text-lg">{description}</p>
      <footer>
        <p className="text-red-600 text-md">{price}</p>
      </footer>
    </article>
  )
}

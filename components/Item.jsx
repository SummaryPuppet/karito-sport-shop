import Image from "next/image";
import Link from "next/link";

export default function Item({ title, description, img, price, id }) {
  return (
    <Link href={`/detail/${id}`}>
      <article className="relative z-0 py-2 text-center shadow-2xl cursor-pointer w-80 hover:ring hover:ring-yellow-400">
        <header>
          <Image src={img} width="200" height="300" alt={description} />
          <h2 className="text-2xl font-bold break-words">{title}</h2>
        </header>
        <p className="text-lg">{description}</p>
        <footer>
          <p className="text-red-600 text-md">{price}</p>
        </footer>
      </article>
    </Link>
  );
}

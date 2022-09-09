import Link from "next/link";
import Image from "next/image";

export default function AutocompletItem({ id, title, img }){
  return (
    <li className="relative z-40 p-1 bg-white rounded hover:bg-orange-400">
      <Link href={`detail/${id}`}>
        <a className="flex">
          <Image src={img} alt={title} width="40" height="40" />
          <h3>{title}</h3>
        </a>
      </Link>
    </li>
  )
}

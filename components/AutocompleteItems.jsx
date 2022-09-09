import Link from "next/link";

export default function AutocompletItem({ id, title }){
  return (
    <li>
      <Link href={`detail/${id}`}>
        <a>
          <h3>{title}</h3>
        </a>
      </Link>
    </li>
  )
}

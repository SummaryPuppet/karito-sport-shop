import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
import { BsWhatsapp, BsFacebook } from "react-icons/bs"

export default function Navbar() {
  return (
    <header className="flex flex-col items-center justify-start py-2 mb-1 bg-orange-200 lg:py-1 lg:flex-row gap-4">
      <nav className="px-2 cursor-pointer">
        <Link href="/">
          <Image src="/logo.jpeg" width="100" height="100" alt="logo" />
        </Link>
      </nav>

      <h1 className="text-3xl font-bold">Karito Sport</h1>

      <Search />

      <nav className="flex">
        <a
          href="https://wa.me/+51924116322"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsWhatsapp className="w-20" size="2em" />
        </a>
        
        <a
          href="https://www.facebook.com/carolina.vargaspanduro"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsFacebook className="w-20" size="2em" />
        </a>
      </nav>
    </header>
  );
}

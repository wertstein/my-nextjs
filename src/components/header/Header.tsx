import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header className="bg-gradient-to-r p-4 from-teal-950 to-teal-900">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Image src={"/images/logo.png"} width={50} height={50} alt="logo" />
        <div className="ml-4 text-md font-extrabold text-teal-50">
          Lets look at Next.js
        </div>
      </div>
      <nav className="nav-links">
        <Link className="hover:text-teal-200" href="/">
          Home
        </Link>
        <Link className="hover:text-teal-200" href="/events">
          Events
        </Link>
        <Link className="hover:text-teal-200" href="/about-us">
          About us
        </Link>
      </nav>
    </div>
    <div className="flex items-center h-24 text-3xl text-teal-50">
      Next.js React Framework Course - Build and Deploy a Full Stack App From
      scratch
    </div>
  </header>
);

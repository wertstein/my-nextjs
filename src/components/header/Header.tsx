import Link from "next/link";

export const Header = () => (
  <header>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/events">Events</Link>
      <Link href="/about-us">About us</Link>
    </nav>
  </header>
);

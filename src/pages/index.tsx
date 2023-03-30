import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

async function getCategories() {
  const { events_categories } = await import("./../../data/data.json");

  return events_categories;
}

export default function HomePage({ data }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About us</Link>
        </nav>
      </header>

      <main className={styles.main}>
        {data.map((ecat) => (
          <Link key={ecat.id} href={`/events/${ecat.id}`}>
            <Image src={ecat.image} alt={ecat.id} width={300} height={200} />
            <h2>{ecat.title}</h2>
            <p>{ecat.description}</p>
          </Link>
        ))}
      </main>

      <footer className={styles.footer}>
        <p>(c) 2023 - Lets try Next.js</p>
      </footer>
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}

import Head from "next/head";
import { Inter } from "next/font/google";
import { HomePage } from "@/components/home/home-page";

const inter = Inter({ subsets: ["latin"] });

async function getCategories() {
  const { events_categories } = await import("./../../data/data.json");

  return events_categories;
}

export default function homePage({ data: any }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage data={data} />
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

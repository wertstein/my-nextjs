import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function EventsCatPage({ data, cat }) {
  return (
    <div>
      <h1>Events in {cat}</h1>
      <main className={styles.main}>
        {data.map(({ title, description, image, id }) => (
          <>
            <Link key={id} href={`${cat}/${id}`} passHref>
              <h2>{title}</h2>
              <Image src={image} alt={title} width={300} height={200} />
              <p>{description}</p>
            </Link>

            <hr />
          </>
        ))}
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const { events_categories } = await import("../../../../data/data.json");

  return {
    paths: events_categories.map(({ id }) => ({
      params: { cat: id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("../../../../data/data.json");

  return {
    props: {
      data: allEvents.filter(({ city }) => city === context.params.cat),
      cat: context.params.cat,
    },
  };
}

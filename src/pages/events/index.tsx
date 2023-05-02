import Link from "next/link";
import Image from "next/image";

export default function EventsPage({ data: any }) {
  return (
    <div>
      <h1>Events</h1>
      <main>
        {data.map((ecat) => (
          <Link key={ecat.id} href={`/events/${ecat.id}`} passHref>
            <Image src={ecat.image} alt={ecat.id} width={300} height={200} />
            <h2>{ecat.title}</h2>
          </Link>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { events_categories } = await import("../../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}

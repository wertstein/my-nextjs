import Image from "next/image";

export async function getStaticPaths() {
  const { allEvents } = await import("./../../../../data/data.json");

  return {
    paths: allEvents.map(({ id, city }) => ({ params: { id, cat: city } })),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { allEvents } = await import("./../../../../data/data.json");

  return {
    props: {
      data: allEvents.find(({ id }) => id === context.params.id),
    },
  };
}

export default function EventPage({ data }) {
  return (
    <div>
      <Image
        src={data.image}
        width={1000}
        height={200}
        alt={data.title}
      ></Image>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export const HomePage = ({ data }) => (
  <main>
    {data.map((ecat) => (
      <Link key={ecat.id} href={`/events/${ecat.id}`}>
        <Image src={ecat.image} alt={ecat.id} width={300} height={200} />
        <h2>{ecat.title}</h2>
        <p>{ecat.description}</p>
      </Link>
    ))}
  </main>
);

import Image from "next/image";
import Link from "next/link";

export const HomePage = ({ data: any }) => (
  <main>
    <h1 className="text-3xl m-4">Discover events in all cities</h1>
    {data.map((ecat) => (
      <Link
        key={ecat.id}
        href={`/events/${ecat.id}`}
        className="md:flex odd:flex-row-reverse m-4 p-4 hover:saturate-200 max-w-screen-md hover:text-teal-100"
      >
        <Image
          src={ecat.image}
          alt={ecat.id}
          width={300}
          height={200}
          className="rounded-md mr-4 max-h-min"
        />
        <div className="flex flex-col justify-center m-3">
          <h2 className="text-2xl mb-3">{ecat.title}</h2>
          <p>{ecat.description}</p>
        </div>
      </Link>
    ))}
  </main>
);

import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

export const EventDetails = ({ data }: any) => {
  const inputElement = useRef();
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const email = inputElement.current
      ? (inputElement.current as any).value
      : "";
    const eventId = router.query.id;

    console.log(email, eventId);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, eventId }),
      });

      if (!res.ok) {
        throw new Error(`CRAP: ${res.status}`);
      }

      const data = await res.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{data.title}</h1>
      <Image src={data.image} width={500} height={200} alt={data.title}></Image>
      <p>{data.description}</p>
      <form onSubmit={onSubmit}>
        <input
          ref={inputElement}
          type="email"
          id="reg-email"
          className="p-1"
          placeholder="Your email"
        />
        <button className="bg-orange-400 hover:bg-orange-600 py-1 px-6 ml-2 uppercase">
          Submit
        </button>
      </form>
    </div>
  );
};

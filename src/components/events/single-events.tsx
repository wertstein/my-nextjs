import Image from "next/image";

export const EventDetails = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <Image src={data.image} width={500} height={200} alt={data.title}></Image>
      <p>{data.description}</p>
      <input type="email" />{" "}
      <button className="bg-orange-400 hover:bg-orange-600 p-1 rounded-md">
        Submit
      </button>
    </div>
  );
};

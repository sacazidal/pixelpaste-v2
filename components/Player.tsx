import Image from "next/image";

interface Player {
  image: string;
  name: string;
  role: string;
}

const Player = ({ image, name, role }: Player) => {
  return (
    <>
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
        {name}
      </h3>
      <p className="text-neutral-700 dark:text-neutral-300">{role}</p>
    </>
  );
};
export default Player;

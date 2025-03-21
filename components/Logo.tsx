import { poppins } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 font-medium">
      <div className="flex relative h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-md bg-primary">
        <Image
          src={"https://i.ibb.co/fzR9bfmS/dryad.webp"}
          alt="SM"
          fill
          priority
          className="filter invert dark:invert-0 p-1"
        />
      </div>
      <span className={`md:text-base text-sm font-bold ${poppins.className}`}>
        PixelPaste
      </span>
    </Link>
  );
};
export default Logo;

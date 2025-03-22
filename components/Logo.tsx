import { poppins } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center">
        <Image
          src="https://i.ibb.co/fzR9bfmS/dryad.webp"
          alt="Логотип"
          width={40}
          height={40}
        />
        <span
          className={`${poppins.className} ml-3 text-xl font-bold text-neutral-900 dark:text-neutral-100`}
        >
          PixelPaste
        </span>
      </Link>
    </div>
  );
};
export default Logo;

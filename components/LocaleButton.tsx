import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const LocaleButton = ({ href, children, variant = "primary" }: ButtonProps) => {
  const baseStyles =
    "px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95";

  const primaryStyles =
    "bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2";

  const secondaryStyles =
    "bg-transparent border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-800 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2";

  return (
    <Link
      href={href}
      className={`${baseStyles} ${
        variant === "primary" ? primaryStyles : secondaryStyles
      }`}
    >
      {children}
    </Link>
  );
};

export default LocaleButton;

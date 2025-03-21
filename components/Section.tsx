interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "light" | "dark" | "accent";
}

const Section = ({ children, className = "", bg = "light" }: SectionProps) => {
  const bgStyles = {
    light: "bg-neutral-200 dark:bg-neutral-900",
    dark: "bg-white dark:bg-neutral-800",
    accent: "bg-purple-900 text-white",
  };

  return (
    <section className={`py-20 px-6 ${bgStyles[bg]} ${className}`}>
      <div className="max-w-screen-2xl mx-auto animate-fade-in-up">
        {children}
      </div>
    </section>
  );
};

export default Section;

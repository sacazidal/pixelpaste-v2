interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`${className} p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border border-neutral-200 dark:border-neutral-700`}
    >
      {children}
    </div>
  );
};

export default Card;

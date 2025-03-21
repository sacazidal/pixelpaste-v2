interface Feature {
  title: string;
  description: string;
}

const Feature = ({ title, description }: Feature) => {
  return (
    <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700">
      <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
      <p className="text-neutral-700 dark:text-neutral-300">{description}</p>
    </div>
  );
};

export default Feature;

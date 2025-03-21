import Card from "@/components/LocaleCard";
import Section from "@/components/Section";
import { offers } from "@/constants/offers";

const OffersSection = () => {
  return (
    <Section bg="light">
      <h2 className="text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-neutral-100">
        Что мы предлагаем
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <Card key={offer.id}>
            <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
              {offer.title}
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              {offer.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default OffersSection;

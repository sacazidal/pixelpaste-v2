import Card from "@/components/LocaleCard";
import Section from "@/components/Section";
import { chooses } from "@/constants/choose";

const WhyChooseUsSection = () => {
  return (
    <Section bg="light">
      <h2 className="text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-neutral-100">
        Почему выбирают нас?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {chooses.map((choose) => (
          <Card key={choose.id}>
            <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
              {choose.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              {choose.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUsSection;

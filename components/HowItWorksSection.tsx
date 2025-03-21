import Card from "@/components/LocaleCard";
import Section from "@/components/Section";

const HowItWorksSection = () => {
  return (
    <Section bg="dark">
      <h2 className="text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-neutral-100">
        Как это работает
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="dark:bg-purple-900 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
            Для верстальщиков
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            Выбирайте макет из нашей коллекции, скачивайте его бесплатно и
            используйте в своих проектах.
          </p>
        </Card>
        <Card className="dark:bg-purple-900 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
            Для дизайнеров
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            Загружайте свои макеты на платформу, устанавливайте цену или делайте
            их бесплатными. Получайте отзывы и доход от своих работ.
          </p>
        </Card>
      </div>
    </Section>
  );
};

export default HowItWorksSection;

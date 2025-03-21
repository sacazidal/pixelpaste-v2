import LocaleButton from "@/components/LocaleButton";
import Section from "@/components/Section";
import { poppins } from "@/lib/fonts";

const HeroSection = () => {
  return (
    <Section bg="light">
      <div className="text-center">
        <h1
          className={`${poppins.className} text-5xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-neutral-100`}
        >
          PixelPaste
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-neutral-700 dark:text-neutral-300">
          Место, где дизайн встречается с кодом.
        </p>
        <p className="text-lg md:text-xl mb-12 text-neutral-700 dark:text-neutral-300">
          Бесплатные макеты Figma для верстки и платформа для дизайнеров.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <LocaleButton href="/" variant="primary">
            Исследовать макеты
          </LocaleButton>
          <LocaleButton href="#upload" variant="secondary">
            Загрузить шаблон
          </LocaleButton>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;

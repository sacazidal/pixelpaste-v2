import Button from "@/components/LocaleButton";
import Section from "@/components/Section";

const JoinUsSection = () => {
  return (
    <Section bg="accent">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Присоединяйтесь к нам!</h2>
        <p className="text-lg mb-12">
          Станьте частью сообщества PixelPaste и начните создавать вместе с
          нами.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Button href="/signup" variant="primary">
            Зарегистрироваться
          </Button>
          <Button href="/" variant="secondary">
            Исследовать макеты
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default JoinUsSection;

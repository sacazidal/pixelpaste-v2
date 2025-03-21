import Section from "@/components/Section";

const MissionSection = () => {
  return (
    <Section bg="dark">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
          Наша миссия
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-neutral-700 dark:text-neutral-300">
          Мы создаем пространство, где дизайнеры и разработчики могут находить
          вдохновение, делиться своими работами и расти вместе. Наша цель —
          сделать процесс создания цифровых продуктов проще, доступнее и
          интереснее для всех.
        </p>
      </div>
    </Section>
  );
};

export default MissionSection;

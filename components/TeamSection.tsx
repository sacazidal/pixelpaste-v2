import Card from "@/components/LocaleCard";
import Section from "@/components/Section";
import { players } from "@/constants/players";
import Player from "./Player";

const TeamSection = () => {
  return (
    <Section bg="dark">
      <h2 className="text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-neutral-100">
        Наша команда
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {players.map((player) => (
          <Card key={player.id} className="dark:bg-purple-900 text-center">
            <Player
              image={player.image}
              name={player.name}
              role={player.role}
            />
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default TeamSection;

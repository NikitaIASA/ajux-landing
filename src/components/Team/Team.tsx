import { FC } from "react";

import "./Team.scss";
import TeamList from "../TeamList";
import SectionHeader from "../SectionHeader";
import Container from "../Container";

interface TeamProps {}

export const Team: FC<TeamProps> = () => {
  return (
    <section className="team">
      <Container>
        <SectionHeader title="Our Team" subtitle="Team" />
        <TeamList />
      </Container>
    </section>
  );
};

import { FC } from "react";

import "./Team.scss";
import TeamList from "../TeamList";
import SectionHeader from "../SectionHeader";

interface TeamProps {}

export const Team: FC<TeamProps> = () => {
  return (
    <section className="team container">
      <SectionHeader title="Our Team" subtitle="Team" />
      <TeamList />
    </section>
  );
};

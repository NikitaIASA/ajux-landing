import { FC } from "react";
import TeamItem from "../TeamItem";

import "./TeamList.scss";

const data = [
  {
    id: 1,
    image: "./teamItem.png",
    name: "Rezaul Karim",
    position: "UX Researcher",
  },
  {
    id: 2,
    image: "./teamItem.png",
    name: "Tanvir Ahmed",
    position: "Product Designer",
  },
  {
    id: 3,
    image: "./teamItem.png",
    name: "Sakib Sharier",
    position: "Webflow Developer",
  },
  {
    id: 4,
    image: "./teamItem.png",
    name: "Rifat Shikder",
    position: "UX Researcher",
  },
];

interface TeamListProps {}

export const TeamList: FC<TeamListProps> = () => {
  return (
    <div className="team-list">
      {data && data.map((item) => <TeamItem key={item.id} {...item} />)}
    </div>
  );
};

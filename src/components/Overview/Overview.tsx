import { FC } from "react";

import "./Overview.scss";

const data = [
  {
    id: 1,
    title: "Projects",
    number: 27,
  },
  {
    id: 2,
    title: "Campaigns",
    number: 18,
  },
  {
    id: 3,
    title: "Events",
    number: 56,
  },
  {
    id: 4,
    title: "Exellency",
    number: 13,
  },
];

interface OverviewProps {}

export const Overview: FC<OverviewProps> = () => {
  return (
    <div className="overview">
      <ul className="overview__list">
        {data &&
          data.map((item) => (
            <li className="overview__item" key={item.id}>
              <p className="overview__title">{item.title}</p>
              <p className="overview__number">{item.number}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

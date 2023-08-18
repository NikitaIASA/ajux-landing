import { FC } from "react";

import "./TeamItem.scss";

interface TeamItemProps {
  image: string;
  name: string;
  position: string;
}

export const TeamItem: FC<TeamItemProps> = ({ image, name, position }) => {
  return (
    <div className="team-item">
      <img
        className="team-item__image"
        src={image}
        alt={`${name} ${position}`}
      />
      <div className="team-item__info">
        <p className="team-item__name">{name}</p>
        <p className="team-item__position">{position}</p>
      </div>
    </div>
  );
};

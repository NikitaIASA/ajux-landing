import { FC } from "react";

import "./ServicesItem.scss";

interface ServicesItemProps {
  image: string;
  title: string;
  description: string;
}

export const ServicesItem: FC<ServicesItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="services-item">
      <img className="services-item__image" src={image} alt={title} />
      <h3 className="services-item__title">{title}</h3>
      <p className="services-item__description">{description}</p>
    </div>
  );
};

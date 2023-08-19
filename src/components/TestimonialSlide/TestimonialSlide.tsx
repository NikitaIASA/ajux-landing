import { FC } from "react";

import "./TestimonialSlide.scss";

interface TestimonialSlideProps {
  text: string;
  name: string;
  location: string;
  image: string;
}

export const TestimonialSlide: FC<TestimonialSlideProps> = ({
  text,
  name,
  location,
  image,
}) => {
  return (
    <div className="testimoniall-slide">
      <p className="testimoniall-slide__text">{text}</p>
      <div className="testimoniall-slide__person-information">
        <img src={image} alt={name} />
        <div>
          <p className="testimoniall-slide__name">{name}</p>
          <p className="testimoniall-slide__location">{location}</p>
        </div>
      </div>
    </div>
  );
};

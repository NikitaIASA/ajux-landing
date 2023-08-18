import { FC } from "react";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
}

import "./SectionHeader.scss";

export const SectionHeader: FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
}) => {
  return (
    <div className="section-header">
      <p className="section-header__subtitle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="6"
          viewBox="0 0 43 6"
          fill="none"
        >
          <path
            d="M42.8868 3L40 0.113249L37.1132 3L40 5.88675L42.8868 3ZM0 3.5H40V2.5H0V3.5Z"
            fill="#D91966"
          />
        </svg>
        {subtitle}
      </p>
      <h2 className="section-header__title">{title}</h2>
      <p className="section-header__description">{description}</p>
    </div>
  );
};

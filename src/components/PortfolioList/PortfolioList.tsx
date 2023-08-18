import { FC } from "react";
import PortfolioItem from "../PortfolioItem";

import "./PortfolioList.scss";

interface PortfolioListProps {}

export const PortfolioList: FC<PortfolioListProps> = () => {
  return (
    <div className="portfolio-list">
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <svg
        className="portfolio-list__circle"
        xmlns="http://www.w3.org/2000/svg"
        width="136"
        height="136"
        viewBox="0 0 136 136"
        fill="none"
      >
        <circle cx="68" cy="68" r="68" fill="#D91966" fill-opacity="0.2" />
      </svg>
    </div>
  );
};

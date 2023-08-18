import { FC } from "react";
import portfolioImage from "../../assets/portfolio/portfolio.png";

import "./PortfolioItem.scss";

interface PortfolioItemProps {}

export const PortfolioItem: FC<PortfolioItemProps> = () => {
  return (
    <div className="portfolio-item">
      <img className="portfolio-item__image" src={portfolioImage} alt="Creative Case Study" />
      <div className="portfolio-item__caption">
        <p className="portfolio-item__subtitle">Creative</p>
        <p className="portfolio-item__title">Case Study</p>
      </div>
    </div>
  );
};

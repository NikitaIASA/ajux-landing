import { FC } from "react";

import "./PriceCard.scss";

interface PriceCardProps {
  type: string;
  category: string;
  price: number;
  discount: number;
  offers: string[];
  isActive: boolean;
}

export const PriceCard: FC<PriceCardProps> = ({
  type,
  category,
  price,
  discount,
  offers,
  isActive,
}) => {
  return (
    <div className={`price-card ${isActive ? "active-card" : ""}`}>
      <p className="price-card__type">{type}</p>
      <p className="price-card__category">{category}</p>
      <div className="price-card__price-block">
        <p className="price-card__price">
          $<span>{price}</span>/mo
        </p>
        <p className="price-card__discount">
          Yearly <span>{discount}% Off</span>
        </p>
      </div>
      <ul className="price-card__offers">
        {offers.map((offer) => (
          <li className="price-card__offer">
            {isActive ? (
              <svg
                className="price-card__check"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="#FAFAFA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="price-card__check"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="#25282B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}

            {offer}
          </li>
        ))}
      </ul>
      <a className="price-card__button" href="#">
        Buy now
      </a>
    </div>
  );
};

import { FC } from "react";
import PriceCard from "../PriceCard";

import "./PriceList.scss";

interface PriceListProps {}

const data = [
  {
    id: 1,
    type: "Basic",
    category: "Most Popular",
    price: 2.46,
    discount: 15,
    offers: [
      "Unlimited Products",
      "Custom permissions",
      "Custom infrastructure",
      "Unlimited updates",
    ],
  },
  {
    id: 2,
    type: "Standard",
    category: "Recommended",
    price: 6.56,
    discount: 15,
    offers: [
      "Unlimited Products",
      "Custom permissions",
      "Custom infrastructure",
      "Unlimited updates",
      "Unlimited infrastructure",
    ],
  },
  {
    id: 3,
    type: "Premium",
    category: "Best value",
    price: 2.46,
    discount: 15,
    offers: [
      "Unlimited Products",
      "Custom permissions",
      "Custom infrastructure",
      "Unlimited updates",
    ],
  },
];

export const PriceList: FC<PriceListProps> = () => {
  return (
    <div className="price-list">
      {data && data.map((card) => <PriceCard key={card.id} {...card} isActive={card.id === 2} />)}
    </div>
  );
};

import { FC } from 'react';
import ServicesItem from '../ServicesItem';

import "./ServicesList.scss";

const data = [
    {
        id: 1,
        image: "./services/servicesImg1.svg",
        title: "Business Strategy",
        description: "A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics"
    },
    {
        id: 2,
        image: "./services/servicesImg2.svg",
        title: "UX/UI Design",
        description: "A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics"
    },
    {
        id: 3,
        image: "./services/servicesImg3.svg",
        title: "App Development",
        description: "A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics"
    }
];

interface ServicesListProps {}

export const ServicesList: FC<ServicesListProps> = () => {
  return (
    <div className="services-list">
        {
            data.map((item) => (
                <ServicesItem key={item.id} {...item}/>
            ))
        }
    </div>
  );
};

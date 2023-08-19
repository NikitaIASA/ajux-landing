import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import TestimonialSlide from "../TestimonialSlide";

import "swiper/css";
import "./Testimonials.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    text: "Let our experts prepare a free home analysis for you! Just fill out our Surround yourself with the quality of one of Saska toon’s premier home builder. Just fill out our form. Surround yourself with quality of one of Saskatoon’s premier home builder.",
    name: "Rezaul Karim",
    location: "Owener, Softia, UK",
    image: "./avatar.png",
  },
  {
    id: 2,
    text: "Let our experts prepare a free home analysis for you! Just fill out our Surround yourself with the quality of one of Saska toon’s premier home builder. Just fill out our form. Surround yourself with quality of one of Saskatoon’s premier home builder.",
    name: "Abdur Razzak",
    location: "Owener, Softia, UK",
    image: "./avatar.png",
  },
  {
    id: 3,
    text: "Let our experts prepare a free home analysis for you! Just fill out our Surround yourself with the quality of one of Saska toon’s premier home builder. Just fill out our form. Surround yourself with quality of one of Saskatoon’s premier home builder.",
    name: "Ashik Ahmed",
    location: "Owener, Softia, UK",
    image: "./avatar.png",
  },
  {
    id: 4,
    text: "Let our experts prepare a free home analysis for you! Just fill out our Surround yourself with the quality of one of Saska toon’s premier home builder. Just fill out our form. Surround yourself with quality of one of Saskatoon’s premier home builder.",
    name: "Name Surname",
    location: "London, UK",
    image: "./avatar.png",
  },
];

interface TestimonialsProps {}

export const Testimonials: FC<TestimonialsProps> = () => {
  return (
    <section className="testimonials">
      <Container>
        <div className="testimonials__inner">
          <div className="testimonails__top">
            <SectionHeader
              title="Customers Talk About Us"
              subtitle="Testimonials"
              description="Customer support represents the resources within your company that provide technical assistance to consumers after they purchase a product or service."
            />
          </div>
          <Swiper
            modules={[Navigation, Pagination, FreeMode]}
            spaceBetween={24}
            slidesPerView={3}
            // freeMode={true}
            navigation
            pagination={{ clickable: true }}
          >
            {data.map((item) => (
              <SwiperSlide className="swiperslive" key={item.id}>
                <TestimonialSlide {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

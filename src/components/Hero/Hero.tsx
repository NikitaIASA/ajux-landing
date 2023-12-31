import { FC } from "react";
import Container from "../Container";
import heroImage from "../../assets/hero/hero1.jpg";
import heroImage2 from "../../assets/hero/hero2.jpg";

import "./Hero.scss";

interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__inner">
          <div className="hero__left">
            <p className="hero__subtitle">
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
              Welcome to <span>Ajux</span>
            </p>
            <h2 className="hero__title">Impact the World by Taking Action</h2>
            <p className="hero__description">
              Build immersive brands to take advantage of change
            </p>
            <button className="hero__button">Get Started</button>
          </div>
          <div className="hero__right">
            <div className="hero__images">
              <div className="hero__images-group">
                <img src={heroImage} alt="heroImage" />
                <img src={heroImage} alt="heroImage" />
              </div>
              <img src={heroImage2} alt="heroImage2" />
              <svg
                className="hero__circle"
                xmlns="http://www.w3.org/2000/svg"
                width="211"
                height="211"
                viewBox="0 0 211 211"
                fill="none"
              >
                <path
                  d="M126.39 145.007C148.045 133.636 156.383 106.863 145.012 85.2078C133.641 63.5523 106.868 55.2149 85.2127 66.5857C63.5572 77.9565 55.2198 104.73 66.5906 126.385C77.9613 148.041 104.734 156.378 126.39 145.007Z"
                  stroke="#D91966"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M151.507 144.035C172.625 118.79 169.279 81.2063 144.034 60.0889C118.789 38.9716 81.2053 42.3175 60.0879 67.5623C38.9706 92.807 42.3165 130.391 67.5613 151.508C92.806 172.626 130.39 169.28 151.507 144.035Z"
                  stroke="#D91966"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M129.946 151.78C104.588 165.095 73.1261 155.298 59.8112 129.94C46.4963 104.582 56.294 73.1194 81.652 59.8045C107.01 46.4896 138.472 56.2872 151.787 81.6453C165.102 107.003 155.3 138.468 129.946 151.78Z"
                  stroke="#D91966"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M126.39 145.007C148.045 133.636 156.383 106.863 145.012 85.2078C133.641 63.5523 106.868 55.2149 85.2127 66.5857C63.5572 77.9565 55.2198 104.73 66.5906 126.385C77.9613 148.041 104.734 156.378 126.39 145.007Z"
                  stroke="#D91966"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M122.572 137.736C140.211 128.474 147.002 106.667 137.74 89.0277C128.478 71.3887 106.671 64.5977 89.0319 73.8595C71.3929 83.1212 64.6019 104.929 73.8637 122.567C83.1254 140.206 104.933 146.997 122.572 137.736Z"
                  stroke="#D91966"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M119.074 131.074C133.034 123.744 138.408 106.486 131.079 92.5258C123.749 78.5661 106.49 73.1916 92.5302 80.5215C78.5705 87.8514 73.196 105.11 80.5259 119.07C87.8558 133.029 105.114 138.404 119.074 131.074Z"
                  stroke="#D91966"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M149.67 76.7131C157.22 72.7489 160.126 63.4151 156.162 55.8655C152.198 48.3158 142.864 45.4091 135.314 49.3733C127.765 53.3374 124.858 62.6712 128.822 70.2209C132.786 77.7706 142.12 80.6772 149.67 76.7131Z"
                  fill="#3F3F3F"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

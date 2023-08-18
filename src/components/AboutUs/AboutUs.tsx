import { FC } from "react";
import aboutUs from "../../assets/about-us/about-us.png";
import SectionHeader from "../SectionHeader";
import Overview from "../Overview";

import "./AboutUs.scss";

interface AboutUsProps {}

export const AboutUs: FC<AboutUsProps> = () => {
  return (
    <section className="about-us container">
      <div className="about-us__inner">
        <div className="about-us__left">
          <SectionHeader
            title="Insights about our company"
            subtitle="About us"
            description="Let our experts prepare a free home analysis for you! Just fill out our form. Surround yourself with the luxury and quality of one of Saskatoon’s premier home builder. At Properties we take pride in building you everything you need to call The Meadows home."
          />
          <p className="about-us__more">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="8"
              viewBox="0 0 17 8"
              fill="none"
            >
              <path
                d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464466C12.9763 0.269204 12.6597 0.269204 12.4645 0.464466C12.2692 0.659728 12.2692 0.976311 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53553L16.3536 4.35355ZM0 4.5H16V3.5H0V4.5Z"
                fill="#D91966"
              />
            </svg>
            Learn More
          </p>
          <Overview />
        </div>
        <div className="about-us__right">
          <img className="about-us__image" src={aboutUs} alt="about us" />
          <svg
            className="about-us__top-circle"
            xmlns="http://www.w3.org/2000/svg"
            width="126"
            height="68"
            viewBox="0 0 126 68"
            fill="none"
          >
            <path
              d="M123.971 34.3705C123.971 52.2505 109.471 66.7505 91.5907 66.7505C73.7107 66.7505 59.2207 52.2505 59.2207 34.3705C59.2207 16.4905 73.7107 2.00049 91.5907 2.00049"
              stroke="#D91966"
              stroke-width="2.5"
              stroke-miterlimit="10"
            />
            <path
              d="M1 52.9214L16.21 37.7114"
              stroke="#3F3F3F"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M14.2598 52.9214L29.4698 37.7114"
              stroke="#3F3F3F"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M27.5195 52.9214L42.7295 37.7114"
              stroke="#3F3F3F"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M40.7793 52.9214L55.9993 37.7114"
              stroke="#3F3F3F"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M54.0391 52.9214L69.2591 37.7114"
              stroke="#3F3F3F"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M67.3105 52.9214L82.5206 37.7114"
              stroke="#3F3F3F"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M80.5703 52.9214L95.7803 37.7114"
              stroke="#3F3F3F"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
          </svg>
          <svg
            className="about-us__bottom-circle"
            xmlns="http://www.w3.org/2000/svg"
            width="211"
            height="211"
            viewBox="0 0 211 211"
            fill="none"
          >
            <path
              d="M125.64 144.255C147.295 132.884 155.633 106.111 144.262 84.4556C132.891 62.8001 106.118 54.4627 84.4627 65.8335C62.8072 77.2043 54.4698 103.977 65.8406 125.633C77.2113 147.288 103.984 155.626 125.64 144.255Z"
              stroke="#D91966"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M150.757 143.283C171.875 118.038 168.529 80.4541 143.284 59.3367C118.039 38.2194 80.4553 41.5653 59.3379 66.8101C38.2206 92.0548 41.5665 129.639 66.8113 150.756C92.056 171.874 129.64 168.528 150.757 143.283Z"
              stroke="#D91966"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M129.196 151.028C103.838 164.343 72.3761 154.546 59.0612 129.187C45.7463 103.829 55.544 72.3672 80.902 59.0523C106.26 45.7374 137.722 55.535 151.037 80.8931C164.352 106.251 154.55 137.716 129.196 151.028Z"
              stroke="#D91966"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M125.64 144.255C147.295 132.884 155.633 106.111 144.262 84.4556C132.891 62.8001 106.118 54.4627 84.4627 65.8335C62.8072 77.2043 54.4698 103.977 65.8406 125.633C77.2113 147.288 103.984 155.626 125.64 144.255Z"
              stroke="#D91966"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M121.822 136.983C139.461 127.722 146.252 105.914 136.99 88.2755C127.728 70.6365 105.921 63.8455 88.2819 73.1073C70.6429 82.369 63.8519 104.176 73.1137 121.815C82.3754 139.454 104.183 146.245 121.822 136.983Z"
              stroke="#D91966"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M118.324 130.322C132.284 122.992 137.658 105.733 130.329 91.7736C122.999 77.8139 105.74 72.4394 91.7802 79.7693C77.8205 87.0992 72.446 104.358 79.7759 118.318C87.1058 132.277 104.364 137.652 118.324 130.322Z"
              stroke="#D91966"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M148.92 75.9611C156.47 71.997 159.376 62.6632 155.412 55.1135C151.448 47.5638 142.114 44.6572 134.564 48.6213C127.015 52.5855 124.108 61.9193 128.072 69.469C132.036 77.0186 141.37 79.9253 148.92 75.9611Z"
              fill="#D91966"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

import { FC } from "react";
import Container from "../Container";

import "./Header.scss";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <div className="header__logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="44"
              viewBox="0 0 47 44"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.4509 0L28.7853 9.23943C36.0029 11.5053 41.2385 18.2478 41.2385 26.213C41.2385 27.5407 41.093 28.8345 40.8171 30.0791L46.1518 39.3191H35.477C32.3108 42.2259 28.0882 44.0002 23.4512 44.0002C18.8143 44.0002 14.5917 42.2259 11.4255 39.3191H0.75L6.08517 30.0784C5.80941 28.8339 5.664 27.5404 5.664 26.213C5.664 18.248 10.8992 11.5058 18.1164 9.23967L23.4509 0ZM25.5534 23.3203L23.4515 16.8516L21.3497 23.3203H14.548L20.0507 27.3183L17.9489 33.787L23.4515 29.7891L28.9542 33.787L26.8524 27.3183L32.3551 23.3203H25.5534Z"
                fill="#D91966"
              />
            </svg>
            <h1 className="header__title">Ajux</h1>
          </div>
          <nav className="header__navigation">
            <ul className="header__list">
              <li className="header__item">
                <a className="header__link active" href="#">
                  Home
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="#">
                  About Us
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="#">
                  Services
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="#">
                  Pages
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="#">
                  Contacts Us
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="#">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

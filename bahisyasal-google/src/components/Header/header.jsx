import React from "react";
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header_wrapper container">
      <Link to={'/'} className="header_logo">
        <img src={logo} alt="logo" className="header_logo__img" width={250} height={50} />
      </Link>
        <div className="block_navigation">
          <nav className="bl_nav">
<ul className="bl_nav__list">
          <li className="bl_nav__item siblings">
            <Link to={"/slots"} className="bl_nav__link">Slotar</Link>
            <ul className="block_tab__list">
              <li className="block_tab__item"><Link to={"/slots/aviator"} className="bl_nav__link">Aviator</Link></li>
              <li className="block_tab__item"><Link to={"/slots/gates-of-olympus"} className="bl_nav__link">Gates of Olympus Oyna | Ücretsiz Demo ve Gerçek Parayla Slot Oyunu</Link></li>
              <li className="block_tab__item"><Link to={"/slots/wild-wild-riches"} className="bl_nav__link">Wild Wild Riches Slot Oyunu Ücretsiz ve Gerçek Parayla Oyna</Link></li>
              <li className="block_tab__item"><Link to={"/slots/buffalo-king"} className="bl_nav__link">Buffalo King</Link></li>
              <li className="block_tab__item"><Link to={"/slots/dog-house"} className="bl_nav__link">Dog House</Link></li>
              <li className="block_tab__item"><Link to={"/slots/money-train"} className="bl_nav__link">Money Train</Link></li>
              <li className="block_tab__item"><Link to={"/slots/book-of-shadows"} className="bl_nav__link">Book Of Shadows</Link></li>
              <li className="block_tab__item"><Link to={"/slots/sweet-bonanza"} className="bl_nav__link">Sweet Bonanza Oyna Seçeneğiyle Kazanmaya Ne Dersin?</Link></li>
              <li className="block_tab__item"><Link to={"/slots/big-bass-bonanza"} className="bl_nav__link">Big Bass Bonanza</Link></li>
              <li className="block_tab__item"><Link to={"/slots/fruit-party"} className="bl_nav__link">Fruit Party</Link></li>
              <li className="block_tab__item"><Link to={"/slots/release-the-kraken"} className="bl_nav__link">Release The Kraken</Link></li>
              <li className="block_tab__item"><Link to={"/slots/empire-fortune"} className="bl_nav__link">Empire Fortune</Link></li>
              <li className="block_tab__item"><Link to={"/slots/book-of-dead"} className="bl_nav__link">Book Of Dead</Link></li>
            </ul>
          </li>
        </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;


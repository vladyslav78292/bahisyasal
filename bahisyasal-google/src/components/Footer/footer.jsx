import React from "react";
import './footer.css';
import footer_image from '../../images/footer_image.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_part">
          <div className="footer_copy">
            <a href="https://www.dmca.com/Protection/Status.aspx?ID=9c1820ac-eec7-4750-b2a1-d60db7ff5a51&refurl=https://bahisyasal.com/" target="_blank" rel="nofollow" title="DMCA.com Protection Status">
              <img src={footer_image} alt="footer image" />
            </a>
          </div>
          <p className="text_politics">Online bahis siteleri, her biri zevkli ve heyecan doludur. En yüksek heyecanla ve güvenilir bir şekilde bahis yaptığınız bu siteler sizlere yıllardır hizmet vermektedir. Ayrıca online bahis siteleri güncel olarak birbirinden çeşitli bonuslar ve promosyonlar sunmaktadır. Bu şekilde hem bonuslardan hem de oyunlardan gelir elde ederek paranızı katlayabilirsiniz. Bu arada bizim sitemizde bahisyasal.net birçok casino sitesi bulup detaylı bilgi alarak sitelerin güncel giriş adresilerini öğrenebilirsiniz.</p>
          <div className="menu-menu-in-footer-container">
            <nav className="footer_tags_block">
              <p className="footer_tags__title">YASAL BAHİS</p>
              <ul className="footer_tags">
                <li className="footer_tags__item">
                  <Link to={"/"} className="footer_tags__link">Gizlilik Politikamız</Link>
                </li>
                <li className="footer_tags__item">
                  <Link to={"/"} className="footer_tags__link">Hakkımızda</Link>
                </li>
              </ul>
            </nav>
            <nav className="footer_tags_block">
              <p className="footer_tags__title">YENİ CASİNO Sİ̇TELERİ̇</p>
              <ul className="footer_tags">
              <li className="footer_tags__item">
                  <Link to={"/"} className="footer_tags__link">Marsbahis</Link>
                </li>
                <li className="footer_tags__item">
                  <Link to={"/"} className="footer_tags__link">Betpas</Link>
                </li>
                <li className="footer_tags__item">
                  <Link to={"/"} className="footer_tags__link">Betvole</Link>
                </li>
                <li className="footer_tags__item">
                  <Link to={"/"} className="footer_tags__link">Casino Metropol</Link>
                </li>
                <li className="footer_tags__item">
                  <Link to={"/"} className="footer_tags__link">Betebet</Link>
                </li>
              </ul>
            </nav>
            <nav className="footer_tags_block">
              <p className="footer_tags__title">EN İ̇Yİ̇ CASİ̇NO Sİ̇TELERİ̇</p>
              <ul className="footer_tags">
              <li className="footer_tags__item">
                  <Link to={"/"} className="footer_tags__link">Bahsegel</Link>
                </li>
                <li className="footer_tags__item">
                  <Link to={"/"} className="footer_tags__link">Paribahis</Link>
                </li>
                <li className="footer_tags__item">
                  <Link to={"/"} className="footer_tags__link">Bettilt</Link>
                </li>
                <li className="footer_tags__item">
                  <Link to={"/"} className="footer_tags__link">Pin-Up</Link>
                </li>
                <li className="footer_tags__item">
                  <Link to={"/"} className="footer_tags__link">TrBet
</Link>
                </li>              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


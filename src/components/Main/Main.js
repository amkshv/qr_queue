import React, { Component } from 'react';

import './Main.css';

class Main extends Component {
  render() {
    return (
      <div>
        <nav className="mobile-menu">
          <input type="checkbox" id="checkbox" className="mobile-menu__checkbox"></input>
          <label for="checkbox" className="mobile-menu__btn">
            <div className="mobile-menu__icon"></div>
          </label>
            <div className="mobile-menu__container">
              <ul className="mobile-menu__list">
                <li className="mobile-menu__item"><a href="#" className="mobile-menu__link">Home</a></li>
                <li className="mobile-menu__item"><a href="#" className="mobile-menu__link">About us</a></li>
                <li className="mobile-menu__item"><a href="#" className="mobile-menu__link">Work</a></li>
                <li className="mobile-menu__item"><a href="#" className="mobile-menu__link">Contacts</a></li>
              </ul>
            </div>
        </nav>
        <div className="body">
          <div className="body_text">
            <h1>Электронная очередь: QR Scaner</h1>
              Просканируйте QR Code, получите номер в электронной очереди:
            <p>
              <button 
                className="body_button"
                onClick={ () => this.props.history.push('/qr_code') }> 
                Сканировать
                </button></p>
          </div>
        </div>
        <div>
          </div>
        <footer className="footer">
          <div className="footer_item">
          <div className="footer-menu__container">
              <ul className="footer-menu__list">
                <li className="footer-menu__item"><a href="#" className="footer-menu__link">Home</a></li>
                <li className="footer-menu__item"><a href="#" className="footer-menu__link">About us</a></li>
                <li className="footer-menu__item"><a href="#" className="footer-menu__link">Work</a></li>
                <li className="footer-menu__item"><a href="#" className="footer-menu__link">Contacts</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  };
};

export default Main;
 
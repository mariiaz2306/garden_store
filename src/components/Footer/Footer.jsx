import React from "react";
import "./Footer.scss";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { PiWhatsappLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer__title">Contact</h2>
        <div className="footer__contacts">
          <div className="footer__block">
            <div class="footer__item">
              <h3 class="footer__heading">Phone</h3>
              <p class="footer__text">+49 999 999 99 99</p>
            </div>
            <div class="footer__item footer__item-right">
              <h3 class="footer__heading">Socials</h3>
              <div class="footer__socials">
                <a href="#" class="footer__social-link">
                  <BiLogoInstagramAlt />
                </a>
                <a href="#" class="footer__social-link">
                  <PiWhatsappLogoFill />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__block">
            <div class="footer__item">
              <h3 class="footer__heading">Address</h3>
              <p class="footer__text">
                Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
              </p>
            </div>
            <div class="footer__item footer__item-right">
              <h3 class="footer__heading">Working Hours</h3>
              <p class="footer__text">24 hours a day</p>
            </div>
          </div>
          <div className="footer__map">
            <iframe
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=1360&amp;height=350&amp;hl=en&amp;q=Tel%20Ran%20Linkstra%C3%9Fe%202/8%20Berlin+(Tel%20Ran)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>{" "}
            <a href="http://maps-generator.com/ru"></a>{" "}
            <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=d350ca5a448bce3d9a503f4693857443ff066ab6"
            ></script>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

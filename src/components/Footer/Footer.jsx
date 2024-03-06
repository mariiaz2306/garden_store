import React from "react";
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer__title">Contact</h2>
        <div className="footer__contacts">
        </div>
        <div className="footer__map">
        <iframe width="1360" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1360&amp;height=350&amp;hl=en&amp;q=Tel%20Ran%20Linkstra%C3%9Fe%202/8%20Berlin+(Tel%20Ran)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='http://maps-generator.com/ru'></a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=d350ca5a448bce3d9a503f4693857443ff066ab6'></script>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

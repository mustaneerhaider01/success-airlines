import "./Footer.css";

function Footer() {
  return (
    <div className="writeToUs">
      <div className="footerLinks">
        <div className="left">
          <div className="successAirline">
            <img src="/img/OBJECTS.png" alt="" />
            <h5>SuccessAirlines</h5>
          </div>
        </div>
        <div className="right">
          <div className="row" id="rowTop">
            <div className="social">
              <p>Social Links</p>
              <div className="row">
                <a href="#">
                  <img src="/img/facebook-rect.png" alt="" /> Facebook
                </a>
                <a href="#">
                  <img src="/img/instagram-filled.png" alt="" />
                  Instagram
                </a>
                <a href="#">
                  <img src="/img/linkedin-rect.png" alt="" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="siteMaps">
              <p>Site Map</p>
              <div className="row">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#reviews">User Reviews</a>
                <a href="#contact">Contact Us</a>
              </div>
            </div>
          </div>
          <p id="copyWrite">
            Copyright © 2022 SUCCESS AIRLINES APP LLC- All Rights Reserved.
          </p>
        </div>
        <img className="footerImg" src="/img/footerImg.png" alt="" />
      </div>
    </div>
  );
}

export default Footer;

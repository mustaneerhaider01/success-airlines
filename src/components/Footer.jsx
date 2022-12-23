import "./Footer.css";

function Footer() {
  return (
    <div className="writeToUs bg-blue-500 lg:bg-transparent mt-8 lg:mt-0">
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
              <p className="-ml-5 sm:-ml-0">Social Links</p>
              <div className="row">
                <a href="#">
                  <img src="/img/facebook-rect.png" alt="" />
                  <span>Facebook</span>
                </a>
                <a href="#">
                  <img src="/img/instagram-filled.png" alt="" />
                  <span>Instagram</span>
                </a>
                <a href="#">
                  <img src="/img/linkedin-rect.png" alt="" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <p id="copyWrite">
            Copyright © 2022 SUCCESS AIRLINES APP LLC- All Rights Reserved.
          </p>
        </div>
        <img
          className="hidden lg:inline footerImg"
          src="/img/footerImg.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  const [emailAddress, setEmailAddress] = useState("");
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>IIT Ropar,Rupnagar ,punjab</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210 0</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <NavLink exact to="/">
                    <img
                      src="/img/tbiflogoforfooter.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </NavLink>
                </div>
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="footer-social-icons">
                  <span>Follow us</span>
                  <NavLink to="#">
                    <i className="footer-social-icon fab fa-facebook-f facebook-bg"></i>
                  </NavLink>
                  <NavLink to="#">
                    <i className="footer-social-icon fab fa-twitter twitter-bg"></i>
                  </NavLink>
                  <NavLink to="#">
                    <i className="footer-social-icon fab fa-google-plus-g google-bg"></i>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <NavLink to="#">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">about</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">portfolio</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">People</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">facilities</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Galleries</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Contact us</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">career</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Apply</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="#">Latest News</NavLink>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Contact</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input
                      type="email"
                      value={emailAddress}
                      onChange={(e) => {
                        setEmailAddress(e.target.value);
                      }}
                      placeholder="Email Address"
                    />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2022, All Right Reserved </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <NavLink to="#">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Terms</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="#">Privacy</NavLink>
                  </li> */}
                  <li>
                    <NavLink to="#">Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

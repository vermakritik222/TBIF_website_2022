import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <div className="nav__inner">
            <NavLink exact to="/" className="nav-logo">
              <img src="/img/tbiflogofooter.png" alt="" />
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/portfolio"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Portfolio
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  exact
                  to="/people"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  People
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  exact
                  to="/facilities"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Facilities
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  exact
                  to="/galleries"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Galleries
                </NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Contact Us
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  exact
                  to="/career"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Career
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/apply"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Apply
                </NavLink>
              </li>
            </ul>
            <div className="nav-logoend">
              <img src="/img/IITRoparlogo.jpg" alt="" />
            </div>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

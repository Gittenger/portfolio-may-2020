import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer } from "./header-mobile.styles";

const Header = ({ mobile, visible, toggleMenuActive }) => (
  <>
    {/* <button onClick={toggleMenuActive}>toggle</button> */}
    <HeaderContainer mobile={mobile} className={visible ? "active" : ""}>
      <nav>
        <ul>
          <li>
            <Link onClick={toggleMenuActive} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenuActive} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenuActive} to="/resume">
              Resume
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenuActive} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  </>
);

export default Header;

import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer } from "./header-mobile.styles";

const Header = ({ mobile }) => (
  <HeaderContainer mobile={mobile} className="active">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </HeaderContainer>
);

export default Header;

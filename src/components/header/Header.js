import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavIcon } from "./NavIcon";
import { Navigation } from "./Navigation";
import { Logo } from "../Logo";

const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 2em 0 2.5em 0;
`;

function Header({ content }) {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <HeaderStyled>
      <h1 style={{ display: "none" }}>{content.sitetitle}</h1>
      <Link to="/" name="Home">
        <Logo src={content.logos.header} alt={content.sitetitle} />
      </Link>
      <NavIcon onClick={() => setDisplayNav(!displayNav)} />
      <Navigation display={displayNav} onClick={() => setDisplayNav(false)}>
        <ul>
          <li>
            <Link to="/" name="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" name="About">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/plan" name="Plan">
              Create Your Plan
            </Link>
          </li>
        </ul>
      </Navigation>
    </HeaderStyled>
  );
}

export default Header;

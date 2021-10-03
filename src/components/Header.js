import React from "react";
import { Link } from "react-router-dom";
import { Container, HeaderStyled, NavIcon, Navigation } from "./styles";
import { contentShared } from "../data/contentShared";
import { useState } from "react";

function Header() {
  const content = contentShared;
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <Container>
      <HeaderStyled>
        <h1 style={{ display: "none" }}>{content.sitetitle}</h1>
        <Link to="/" name="Home">
          <img
            id="logo-header"
            src={content.logoHeader}
            alt={content.sitetitle}
          />
        </Link>
        <NavIcon onClick={() => setDisplayNav(!displayNav)} />
        <Navigation display={displayNav} onClick={() => setDisplayNav(false)}>
          <ul>
            <li>
              <Link to="/" name="Home">
                <h2>Home</h2>
              </Link>
            </li>
            <li>
              <Link to="/about" name="About">
                <h2>About Us</h2>
              </Link>
            </li>
            <li>
              <Link to="/plan" name="Plan">
                <h2>Create Your Plan</h2>
              </Link>
            </li>
          </ul>
        </Navigation>
      </HeaderStyled>
    </Container>
  );
}

export default Header;

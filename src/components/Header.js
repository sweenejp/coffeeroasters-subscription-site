import React from "react";
import { Link } from "react-router-dom";
import { Container, HeaderStyled, HamburgerIcon, Navigation } from "./styles";
import { metadata } from "../data/metadata";
import { useState } from "react";

function Header() {
  const [displayNav, setDisplayNav] = useState(false);
  const handleClick = () => {
    setDisplayNav(!displayNav);
  };

  return (
    <Container>
      <HeaderStyled>
        <h1 style={{ display: "none" }}>{metadata.sitetitle}</h1>
        <Link to="/" name="Home">
          <img
            id="logo-header"
            src={metadata.logoHeader}
            alt={metadata.sitetitle}
          />
        </Link>
        <HamburgerIcon onClick={handleClick} />
        <Navigation display={displayNav}>
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

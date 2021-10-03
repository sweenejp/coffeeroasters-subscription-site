import React from "react";
import { contentShared } from "../data/contentShared";
import { Container, FooterStyled, FooterNav, SocialIcons } from "./styles";
import { Link } from "react-router-dom";

function Footer() {
  const content = contentShared;
  const footerLinks = content.footerLiinks.map((item) => {
    return (
      <li>
        <a href={item.link}>
          <img src={item.icon} alt={item.link} />
        </a>
      </li>
    );
  });

  return (
    <Container>
      <FooterStyled>
        <img
          id="footer-logo"
          src={content.logoFooter}
          alt={content.sitetitle}
        />
        <FooterNav>
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
        </FooterNav>
        <SocialIcons>{footerLinks}</SocialIcons>
      </FooterStyled>
    </Container>
  );
}

export default Footer;

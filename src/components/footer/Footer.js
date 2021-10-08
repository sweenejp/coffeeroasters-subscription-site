import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { SocialIcons } from "./SocialIcons";
import { FooterLinks } from "./FooterLinks";

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0 2.5em 0;
  margin-bottom: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

function Footer({ content }) {
  const footerSocialLinks = content.social.map((item) => {
    return (
      <li key={item.link}>
        <a href={item.link}>
          <img src={item.icon} alt={item.link} />
        </a>
      </li>
    );
  });

  return (
    <FooterStyled>
      <Logo src={content.logos.footer} alt={content.sitetitle} />
      <FooterLinks>
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
      </FooterLinks>
      <SocialIcons>{footerSocialLinks}</SocialIcons>
    </FooterStyled>
  );
}

export default Footer;

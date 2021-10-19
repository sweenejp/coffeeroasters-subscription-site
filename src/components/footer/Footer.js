import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo } from "../sharedStyledComponents";
import { SocialIcons, FooterLinks, StyledFooter } from "./styles";
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer({ content }) {
  return (
    <Container>
      <StyledFooter>
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
        <SocialIcons>
          <IconContext.Provider
            value={{ size: "25", className: "react-icons" }}
          >
            <li>
              <a href="https://www.facebook.com/">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </li>
          </IconContext.Provider>
        </SocialIcons>
      </StyledFooter>
    </Container>
  );
}

export default Footer;

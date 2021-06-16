import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Cardealio</h1>
          <p>Where roadtrips have never been less stressful</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/">Destination</FooterLink>
          <FooterLink to="/">Get Sponsered</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/">Destination</FooterLink>
          <FooterLink to="/">Get Sponsered</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/">Destination</FooterLink>
          <FooterLink to="/">Get Sponsered</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
padding: 5rem calc((100vw - 1100px) /2)
display: grid;
grid-template-columns: repeat(2, 1fr);
color: #000;
background: #fafafb;
`

const FooterDesc = styled.div`
  padding: 1rem 2rem;

  h1 {
    margin-bottom: 2rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
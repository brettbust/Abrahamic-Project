import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord, FaLinkedin } from 'react-icons/fa';

import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
FooterLinkItems, FooterLinkTitle, FooterLink,   SocialMedia, SocialMediaWrap, 
SocialLogo, WebsiteRights, SocialIcons, SocialIconLink
} from './FooterElements';

/* information */

import { animateScroll as scroll } from 'react-scroll';
import About from '../../pages/aboutUs/about';
import Blog from '../../pages/blog/blog';
import OurMissionOptions from '../../pages/ourMission/ourMissionOptions';
import OurResearch from '../../pages/ourResearch/ourResearchOptions';
import Careers2 from '../../pages/careers/careers2';

import Resources2 from '../../pages/resources/resources2';
import { useRef } from 'react';


/* features */

/* api */

import Methods from '../../pages/api/docs/docs';

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const scrollToTopRef = useRef(null);


  return(
  
  <FooterContainer>
  <FooterWrap>
  <FooterLinksContainer>

  <FooterLinksWrapper>
{/*   <FooterLinkItems>

  <FooterLinkTitle>Whitepaper</FooterLinkTitle>
       <FooterLink to="/">Lorem Ipsum</FooterLink>
       <FooterLink to="/">Lorem Ipsum</FooterLink>
       <FooterLink to="/">Lorem Ipsum</FooterLink>
       <FooterLink to="/">Lorem Ipsum</FooterLink>
       <FooterLink to="/">Lorem Ipsum</FooterLink>
  </FooterLinkItems> */}
          
  <FooterLinkItems>
      <FooterLinkTitle>Information</FooterLinkTitle>
      <FooterLink><About/></FooterLink>
      <FooterLink><OurMissionOptions/></FooterLink>
              <FooterLink><OurResearch/></FooterLink>
       <FooterLink to="/"><Careers2/></FooterLink>
       <FooterLink to="/"><Resources2/></FooterLink>
  </FooterLinkItems>

</FooterLinksWrapper>
  <FooterLinksWrapper>

  <FooterLinkItems>
    <FooterLinkTitle>Features</FooterLinkTitle>
       <FooterLink to="/roadmap" onClick={() => scrollToTopRef()}>Roadmap</FooterLink>
       <FooterLink to="/purpose">Purpose</FooterLink>
       <FooterLink to="/technology">Technology</FooterLink>
       <FooterLink to="/content">Content</FooterLink>
  </FooterLinkItems>

  <FooterLinkItems>

  <FooterLinkTitle>API</FooterLinkTitle>
       <FooterLink to="/apioverview" onClick={() => scrollToTopRef()}>Overview</FooterLink>
       <FooterLink to="/"><Methods/></FooterLink>
              <FooterLink to="/privacyPolicy" onClick={() => scrollToTopRef()}>Privacy Policy</FooterLink>
       <FooterLink to="/cookiepolicy" onClick={() => scrollToTopRef()}>Cookie Policy</FooterLink>
       <FooterLink to="/status">Status</FooterLink>
       <FooterLink to="/faqs" onClick={() => scrollToTopRef()}>FAQ's</FooterLink>
       <FooterLink to="/transparency" onClick={() => scrollToTopRef()}>Transparency Disclosure</FooterLink>
       <FooterLink to="/codeofconduct" onClick={() => scrollToTopRef()}>Code of conduct</FooterLink>
       <FooterLink to="/customercare" onClick={() => scrollToTopRef()}>Customer Care</FooterLink>
       {/* <FooterLink to="/">Log in</FooterLink> */}
            </FooterLinkItems>
  <FooterLinkItems>

  <FooterLinkTitle>Blog</FooterLinkTitle>
       <FooterLink to="/index" onClick={() => scrollToTopRef()}>Index</FooterLink>
       <FooterLink to="/researchanddevelopment" onClick={() => scrollToTopRef()}>Research And Development</FooterLink>
       <FooterLink  to=""><Blog/></FooterLink>
            </FooterLinkItems>

  <FooterLinkItems>

  <FooterLinkTitle>Partners</FooterLinkTitle>
              <FooterLink to="/abrahamicfoundation" onClick={() => scrollToTopRef()}>Abrahamic Foundation</FooterLink>
       <FooterLink to="/artengstudio" onClick={() => scrollToTopRef()}>Artengstudio</FooterLink>
   
            </FooterLinkItems>
            
</FooterLinksWrapper>
  </FooterLinksContainer>
  <SocialMedia>
<SocialMediaWrap>
<SocialLogo to='/' onClick={toggleHome}>
Abrahamic
</SocialLogo>
<WebsiteRights >Abrahamic © {new Date().getFullYear()} All rights reserved</WebsiteRights>
<SocialIcons>
     
<SocialIconLink href="https://www.facebook.com" target="_blank">
<FaFacebook />
</SocialIconLink>
<SocialIconLink href="https://www.instagram.com" target="_blank"
aria-label="Instagram">
<FaInstagram />
</SocialIconLink>
<SocialIconLink href="https://twitter.com" target="_blank"
aria-label="Twitter">
<FaTwitter />
</SocialIconLink>
<SocialIconLink href="https://discord.com" target="_blank"
aria-label="Discord">
<FaDiscord />
</SocialIconLink>
<SocialIconLink href="https://www.linkedin.com" target="_blank"
aria-label="Linkeding">
<FaLinkedin />
</SocialIconLink>
</SocialIcons>
</SocialMediaWrap>
</SocialMedia>
  </FooterWrap>
  </FooterContainer>

)
};

export default Footer;

import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaWhatsapp} from 'react-icons/fa'
import { FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink } from './FooterElements';


const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
};
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                <FooterLinkTitle>About Us </FooterLinkTitle>
                    <FooterLink to='/signin'>How it works</FooterLink>
                    <FooterLink to='/signin'>Testimonials</FooterLink>
                    <FooterLink to='/signin'>Careers</FooterLink>
                    <FooterLink to='/signin'>Investors</FooterLink>
                    <FooterLink to='/signin'>Terms of Service</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                <FooterLinkTitle>Contact Us </FooterLinkTitle>
                    <FooterLink to='/'>Contact</FooterLink>
                    <FooterLink to='/'>Support</FooterLink>
                    <FooterLink to='/'>Destinations</FooterLink>
                    <FooterLink to='/'>Sponsorships</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to='/'>Submit Video</FooterLink>
                    <FooterLink to='/'>Ambassadors</FooterLink>
                    <FooterLink to='/'>Agency</FooterLink>
                    <FooterLink to='/'>Influencer</FooterLink>              
                </FooterLinkItems>
                <FooterLinkItems>
                <FooterLinkTitle>Social Media </FooterLinkTitle>
                    <FooterLink to='/'>Instagram</FooterLink>
                    <FooterLink to='/'>Facebook</FooterLink>
                    <FooterLink to='/'>Youtube</FooterLink>
                    <FooterLink to='/'>Twitter</FooterLink>
                    <FooterLink to='/'>Whatsapp</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              WESWES
            </SocialLogo>
            <WebsiteRights>WESWES © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.Facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="//www.Instagram.com" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="//www.Youtube.com" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='//www.Twitter.com' target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="//www.whatsapp.com" target="_blank" aria-label="Whatsapp">
                <FaWhatsapp />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;

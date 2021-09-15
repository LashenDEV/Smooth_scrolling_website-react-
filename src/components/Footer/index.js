import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {
    FooterConatiner,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights
} from "./FooterElements";

const Footer = () => {
    return (
        <FooterConatiner>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                            <FooterLink to='/'>Destinations</FooterLink>
                            <FooterLink to='/'>Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/'>Submit Videos</FooterLink>
                            <FooterLink to='/'>Ambassadors</FooterLink>
                            <FooterLink to='/'>Agency</FooterLink>
                            <FooterLink to='/'>Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Youtube</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>
                            dolla &copy {new Date().getFullYear()} All right reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank"
                                            aria-label='Facebook'><FaFacebook/></SocialIconLink>

                            <SocialIconLink href='/' target="_blank"
                                            aria-label='Instagram'><FaInstagram/></SocialIconLink>

                            <SocialIconLink href='/' target="_blank"
                                            aria-label='Youtube'><FaYoutube/></SocialIconLink>

                            <SocialIconLink href='/' target="_blank"
                                            aria-label='Twitter'><FaTwitter/></SocialIconLink>

                            <SocialIconLink href='/' target="_blank"
                                            aria-label='LinkedIn'><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterConatiner>
    );
};

export default Footer;

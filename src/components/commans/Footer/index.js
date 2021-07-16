import styled from "styled-components";
import Text from "../../foundation/Text";

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  } */
`;

FooterWrapper.MediaShareSocial = styled.div`

  display: flex;
  
  a {
    font-size: 24px;
    padding: 0 14px 0 14px;
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;
    &:hover,
    &:focus {
        font-weight: 500;
        color: #25B6D2;
    }
  }
`;

const Footer = () => {
    return (
    <FooterWrapper>
        <FooterWrapper.MediaShareSocial>
              <Text as="a" target="_blank" href="https://www.linkedin.com/in/luiz-henrique-oliveira-de-souza-b823a8127"><ion-icon name="logo-linkedin"></ion-icon></Text>
              <Text as="a" target="_blank" href="https://twitter.com/luizhenriqque15"><ion-icon name="logo-twitter"></ion-icon></Text>
              <Text as="a" target="_blank" href="https://github.com/luizhenriqque18"><ion-icon name="logo-github"></ion-icon></Text>
        </FooterWrapper.MediaShareSocial>
        <Text tag='p' variant='paragraph2'>
          © 2021 Dev. made by luizhenriqque18
        </Text>
    </FooterWrapper>
    )
}

export default Footer;
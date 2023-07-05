import React from 'react';
import { Link } from 'react-router-dom';

import VectorImage from '../../assets/images/mobile/FooterMobile_Vector.png';

import Vector1Image from '../../assets/images/mobile/FooterMobile_Vector.png';

import GmailLogoImage from '../../assets/images/mobile/FooterMobile_GmailLogo.png';

import SitdebayquamonImage from '../../assets/images/mobile/FooterMobile_Sitdebayquamon.png';

import { styled } from '@mui/material/styles';

const FooterMobile1 = styled('div')({
  backgroundColor: `rgba(25, 25, 25, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `500px`,
  height: `100px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const PartnerLogo = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `20px`,
  top: `13px`,
});

const ContactTitle = styled('div')({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `402px`,
  top: `13px`,
});

const ContactGroup = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `118px`,
  height: `55.15px`,
  left: `362px`,
  top: `35px`,
});

const Facebook = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `117.36px`,
  height: `15.39px`,
  left: `0px`,
  top: `0px`,
});

const FacebookComSitdepk = styled('div')({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(221, 221, 221, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `8px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `94.91px`,
  height: `9.62px`,
  position: `absolute`,
  left: `0px`,
  top: `3px`,
});

const FacebookLogo = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `15.39px`,
  height: `15.39px`,
  left: `102px`,
  top: `0px`,
  overflow: `hidden`,
});

const Vector = styled('img')({
  height: `12.83px`,
  width: `12.83px`,
  position: `absolute`,
  left: `1px`,
  top: `1px`,
});

const Phone = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `75.67px`,
  height: `15.39px`,
  left: `42px`,
  top: `40px`,
});

const Phone1 = styled('div')({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(221, 221, 221, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `8px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `53.87px`,
  height: `9.62px`,
  position: `absolute`,
  left: `0px`,
  top: `4px`,
});

const PhoneLogo = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `15.39px`,
  height: `15.39px`,
  left: `60px`,
  top: `0px`,
  overflow: `hidden`,
});

const Vector1 = styled('img')({
  height: `12.83px`,
  width: `12.81px`,
  position: `absolute`,
  left: `1px`,
  top: `1px`,
});

const Gmail = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `102.61px`,
  height: `11.84px`,
  left: `15px`,
  top: `22px`,
});

const SitdepkGmailCom = styled('div')({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(221, 221, 221, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `8px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `80.16px`,
  height: `9.62px`,
  position: `absolute`,
  left: `0px`,
  top: `1px`,
});

const GmailLogo = styled('img')({
  height: `11.84px`,
  width: `15.39px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `87px`,
  top: `0px`,
});

const Sitdebayquamon = styled('img')({
  height: `44px`,
  width: `77px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `24px`,
  top: `38px`,
});

const Copyright = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(187, 187, 187, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `155px`,
  top: `46px`,
});

function FooterMobile() {
  return (
    <FooterMobile1>
      <PartnerLogo>{`ĐỐI TÁC`}</PartnerLogo>
      <ContactTitle>{`liên hê`}</ContactTitle>
      <ContactGroup>
        <Facebook>
          <FacebookComSitdepk>{`facebook.com/sitdepk`}</FacebookComSitdepk>
          <FacebookLogo>
            <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
          </FacebookLogo>
        </Facebook>
        <Phone>
          <Phone1>{`0787 097 309`}</Phone1>
          <PhoneLogo>
            <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
          </PhoneLogo>
        </Phone>
        <Gmail>
          <SitdepkGmailCom>{`sitdepk@gmail.com`}</SitdepkGmailCom>
          <GmailLogo src={GmailLogoImage} loading="lazy" alt={'GmailLogo'} />
        </Gmail>
      </ContactGroup>
      <Link to={'https://fb.com/sitdebayquamon'}>
        <Sitdebayquamon
          src={SitdebayquamonImage}
          loading="lazy"
          alt={'Sitdebayquamon'}
        />
      </Link>
      <Copyright>{`@ Copyright by SITDE PK 2023`}</Copyright>
    </FooterMobile1>
  );
}

export default FooterMobile;

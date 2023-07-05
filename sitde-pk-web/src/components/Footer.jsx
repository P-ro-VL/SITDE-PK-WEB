import React from 'react';
import { Link } from 'react-router-dom';

import Ellipse1Image from '../assets/images/Footer_Ellipse_1.png';
import Ellipse11Image from '../assets/images/Footer_Ellipse_1.png';
import VectorImage from '../assets/images/Footer_Vector.png';
import Vector1Image from '../assets/images/Footer_Vector.png';
import Image5Image from '../assets/images/Footer_image_5.png';
import SitdebayquamonLogoImage from '../assets/images/Footer_logo_white_1.png';
import MottoBackgroundImage from '../assets/images/Footer_Rectangle_15.png';

import { styled } from '@mui/material/styles';

const Base = styled('div')({
  backgroundColor: 'rgba(25, 25, 25, 1)',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '100%',
  height: '200px',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

const NameGroup = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '315px',
  height: '56px',
  left: '81px',
  top: '72px',
});

const Name = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '274px',
  height: '34px',
  left: '0px',
  top: '0px',
});

const SitdePk = styled('div')({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'LCK Title',
  fontWeight: '400',
  fontSize: '28px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '0px',
  top: '-3px',
});

const Rectangle4 = styled('div')({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  width: '4px',
  height: '21px',
  position: 'absolute',
  left: '200px',
  top: '7px',
});

const Rectangle5 = styled('div')({
  backgroundColor: 'rgba(108, 202, 255, 1)',
  borderRadius: '3px',
  width: '58px',
  height: '22px',
  position: 'absolute',
  left: '216px',
  top: '6px',
});

const Q30 = styled('div')({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'LCK Title',
  fontWeight: '400',
  fontSize: '14px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '228px',
  top: '7px',
});

const NameDesc = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '315px',
  height: '17px',
  left: '0px',
  top: '39px',
});

const DescContent = styled('div')({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'LCK Title',
  fontWeight: '400',
  fontSize: '14px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '0px',
  top: '0px',
});

const Ellipse1 = styled('img')({
  height: '2px',
  width: '2px',
  position: 'absolute',
  left: '21px',
  top: '14px',
});

const Separator = styled('div')({
  border: '1px solid rgba(51, 51, 51, 1)',
  width: '140px',
  height: '0px',
  position: 'absolute',
  transform: 'rotate(90deg)',
  left: '375px',
  top: '100px',
});

const ContactTitle = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '111px',
  height: '25px',
  left: '1297px',
  top: '30px',
});

const ContactContent = styled('div')({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'LCK Title',
  fontWeight: '400',
  fontSize: '20px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '0px',
  top: '0px',
});

const Ellipse11 = styled('img')({
  height: '4px',
  width: '4px',
  position: 'absolute',
  left: '100px',
  top: '21px',
});

const PartnerTitle = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '117px',
  height: '31px',
  left: '521px',
  top: '24px',
});

const PartnerContent = styled('div')({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'LCK Title',
  fontWeight: '400',
  fontSize: '20px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '0px',
  top: '7px',
});

const Q = styled('div')({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(187, 187, 187, 1)',
  fontStyle: 'normal',
  fontFamily: 'LCK Title',
  fontWeight: '400',
  fontSize: '20px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '49px',
  top: '24px',
});

const ContactGroup = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '184px',
  height: '86px',
  left: '1224px',
  top: '74px',
});

const Facebook = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '183px',
  height: '24px',
  left: '0px',
  top: '0px',
});

const FacebookComSitdepk = styled('div')({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(221, 221, 221, 1)',
  fontStyle: 'normal',
  fontFamily: 'SVN-Gilroy',
  fontWeight: '400',
  fontSize: '14px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '0px',
  top: '5px',
});

const IconsaxBoldFacebook = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '24px',
  height: '24px',
  left: '159px',
  top: '0px',
  overflow: 'hidden',
});

const Vector = styled('img')({
  height: '20px',
  width: '20px',
  position: 'absolute',
  left: '2px',
  top: '2px',
});

const Phone = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '118px',
  height: '24px',
  left: '66px',
  top: '62px',
});

const Q0787097309 = styled('div')({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(221, 221, 221, 1)',
  fontStyle: 'normal',
  fontFamily: 'SVN-Gilroy',
  fontWeight: '400',
  fontSize: '14px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '0px',
  top: '7px',
});

const IconsaxBoldCall = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '24px',
  height: '24px',
  left: '94px',
  top: '0px',
  overflow: 'hidden',
});

const Vector1 = styled('img')({
  height: '20px',
  width: '19.97px',
  position: 'absolute',
  left: '2px',
  top: '2px',
});

const Mail = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '160px',
  height: '18.46px',
  left: '23px',
  top: '34px',
});

const SitdepkGmailCom = styled('div')({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(221, 221, 221, 1)',
  fontStyle: 'normal',
  fontFamily: 'SVN-Gilroy',
  fontWeight: '400',
  fontSize: '14px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '0px',
  top: '2px',
});

const Image5 = styled('img')({
  height: '18.46px',
  width: '24px',
  objectFit: 'cover',
  position: 'absolute',
  left: '136px',
  top: '0px',
});

const SitdebayquamonLogo = styled('img')({
  height: '80px',
  width: '140px',
  objectFit: 'cover',
  position: 'absolute',
  left: '509px',
  top: '75px',
});

const Copyright = styled('div')({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(187, 187, 187, 1)',
  fontStyle: 'normal',
  fontFamily: 'SVN-Gilroy',
  fontWeight: '400',
  fontSize: '13px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '1230px',
  top: '170px',
});

const MottoBackground = styled('img')({
  height: '123px',
  width: '499px',
  objectFit: 'cover',
  position: 'absolute',
  zIndex: `20`,
  left: '1685px',
  top: '285px',
});

const MottoEN = styled('div')({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'LCK Title',
  fontWeight: '400',
  fontSize: '18px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '841px',
  top: '125px',
});

const MottoVNGroup = styled('div')({
  display: 'flex',
  position: 'absolute',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '291px',
  height: '46px',
  left: '796px',
  top: '76px',
});

const MottoVN = styled('div')({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'LCK Title',
  fontWeight: '400',
  fontSize: '32px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '0px',
  top: '8px',
});

const Q1 = styled('div')({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'LCK Title',
  fontWeight: '400',
  fontSize: '32px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '74px',
  top: '38px',
});

const MottoKR = styled('div')({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'LCK Title',
  fontWeight: '400',
  fontSize: '24px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  position: 'absolute',
  left: '855px',
  top: '50px',
});

export default function Footer({ position }) {
  return (
    <div ref={position}>
      <Base>
        <NameGroup>
          <Name>
            <SitdePk>{'SITDE PK'}</SitdePk>
            <Rectangle4></Rectangle4>
            <Rectangle5></Rectangle5>
            <Q30>{'3.0'}</Q30>
          </Name>
          <NameDesc>
            <DescContent>{'ĐAI CHIẾN ĐỀ THI - LẤY NGAY A+'}</DescContent>
            <Ellipse1 src={Ellipse1Image} loading="lazy" />
          </NameDesc>
        </NameGroup>

        <Separator></Separator>

        <ContactTitle>
          <ContactContent>{'LIÊN HÊ'}</ContactContent>
          <Ellipse11 src={Ellipse11Image} loading="lazy" alt={'Ellipse 1'} />
        </ContactTitle>

        <PartnerTitle>
          <PartnerContent>{'ĐÔI TÁC'}</PartnerContent>
          <Q />
        </PartnerTitle>

        <ContactGroup>
          <Facebook>
            <Link to="https://fb.com/sitdepk" target="_blank">
              <FacebookComSitdepk>{'facebook.com/sitdepk'}</FacebookComSitdepk>
              <IconsaxBoldFacebook>
                <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
              </IconsaxBoldFacebook>
            </Link>
          </Facebook>
          <Phone>
            <Q0787097309>{'0787 097 309'}</Q0787097309>
            <IconsaxBoldCall>
              <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
            </IconsaxBoldCall>
          </Phone>
          <Mail>
            <SitdepkGmailCom>{'sitdepk@gmail.com'}</SitdepkGmailCom>
            <Image5 src={Image5Image} loading="lazy" alt={'image 5'} />
          </Mail>
        </ContactGroup>

        <Link to="https://fb.com/sitdebayquamon" target="_blank">
          <SitdebayquamonLogo src={SitdebayquamonLogoImage} loading="lazy" />
        </Link>

        <Copyright>{'@ Copyright by SITDE PK 2023'}</Copyright>

        <MottoBackground src={MottoBackgroundImage} loading="lazy" />

        <MottoEN>{'YOU CAN DO IT'}</MottoEN>
        <MottoVNGroup>
          <MottoVN>{'cố lên nào!'}</MottoVN>
          <Q1 />
        </MottoVNGroup>
        <MottoKR>{'모두 제일 좋다'}</MottoKR>
      </Base>
    </div>
  );
}

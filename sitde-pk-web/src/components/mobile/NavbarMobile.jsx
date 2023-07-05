import React from 'react';

import Ellipse1Image from '../../assets/images/mobile/NavbarMobile_Ellipse_1.png';

import { styled } from '@mui/material/styles';

const NavbarMobile1 = styled('div')({
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

const NameGroup = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `270px`,
  height: `51px`,
  left: `115px`,
  top: `25px`,
});

const Name = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `229px`,
  height: `29px`,
  left: `21px`,
  top: `0px`,
});

const NameTitle = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `-4px`,
});

const Separator = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `4px`,
  height: `17px`,
  position: `absolute`,
  left: `172px`,
  top: `6px`,
});

const VersionBase = styled('div')({
  backgroundColor: `rgba(108, 202, 255, 1)`,
  borderRadius: `3px`,
  width: `42px`,
  height: `17px`,
  position: `absolute`,
  left: `187px`,
  top: `6px`,
});

const Version = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `29px`,
  height: `12px`,
  position: `absolute`,
  left: `194px`,
  top: `5px`,
});

const Desc = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `270px`,
  height: `17px`,
  left: `0px`,
  top: `32px`,
});

const AiChiÊnÊThiLÂyNgayA = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `3px`,
});

const Ellipse1 = styled('img')({
  height: `2px`,
  width: `2px`,
  position: `absolute`,
  left: `18px`,
  top: `15px`,
});

const Q = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `8px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `76px`,
  top: `10px`,
});

const Q1 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `8px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `111px`,
  top: `0px`,
});

const Q2 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `8px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `184px`,
  top: `10px`,
});

function NavbarMobile() {
  return (
    <NavbarMobile1>
      <NameGroup>
        <Name>
          <NameTitle>{`SITDE PK`}</NameTitle>
          <Separator></Separator>
          <VersionBase></VersionBase>
          <Version>{`3.0`}</Version>
        </Name>
        <Desc>
          <AiChiÊnÊThiLÂyNgayA>
            {`đAi chiÊn đÊ thi - lÂy ngay a+`}
          </AiChiÊnÊThiLÂyNgayA>
          <Ellipse1 src={Ellipse1Image} loading="lazy" alt={'Ellipse 1'} />
          <Q>{'`'}</Q>
          <Q1>{'`'}</Q1>
          <Q2>{'`'}</Q2>
        </Desc>
      </NameGroup>
    </NavbarMobile1>
  );
}

export default NavbarMobile;

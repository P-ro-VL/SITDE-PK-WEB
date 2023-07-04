import React from 'react';

import { styled } from '@mui/material/styles';

const NavbarDefault1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `100%`,
  height: `100px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Rectangle3 = styled('div')({
  backgroundColor: `rgba(25, 25, 25, 1)`,
  width: `100%`,
  height: `100px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const SitdePk = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `28px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `55px`,
  top: `30px`,
});

const Rectangle4 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `4px`,
  height: `21px`,
  position: `absolute`,
  left: `255px`,
  top: `40px`,
});

const Rectangle5 = styled('div')({
  backgroundColor: `rgba(108, 202, 255, 1)`,
  borderRadius: `3px`,
  width: `58px`,
  height: `22px`,
  position: `absolute`,
  left: `271px`,
  top: `39px`,
});

const Q30 = styled('div')({
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
  left: `283px`,
  top: `40px`,
});

const Frame1 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `606px`,
  top: `41px`,
  height: `19px`,
  width: `779px`,
});

const About = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(86, 86, 86, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const Download = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(86, 86, 86, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 22px`,
});

const Features = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(86, 86, 86, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 22px`,
});

const Contact = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(86, 86, 86, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 22px`,
});

const SitdeBayquamon = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(86, 86, 86, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 22px`,
});

export default function NavbarDefault() {
  return (
    <NavbarDefault1 className="fixed">
      s<Rectangle3></Rectangle3>
      <SitdePk>{`SITDE PK`}</SitdePk>
      <Rectangle4></Rectangle4>
      <Rectangle5></Rectangle5>
      <Q30>{`3.0`}</Q30>
      <Frame1>
        <About>{`about`}</About>
        <Download>{`download`}</Download>
        <Features>{`features`}</Features>
        <Contact>{`CONTACT`}</Contact>
        <SitdeBayquamon>{`sitdeBAYQUAMON`}</SitdeBayquamon>
      </Frame1>
    </NavbarDefault1>
  );
}

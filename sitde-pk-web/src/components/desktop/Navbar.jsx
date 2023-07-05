import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';

const Base = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `fixed`,
  zIndex: `20`,
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

const Name = styled('div')({
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

const Separator = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `4px`,
  height: `21px`,
  position: `absolute`,
  left: `255px`,
  top: `40px`,
});

const VersionBase = styled('div')({
  backgroundColor: `rgba(108, 202, 255, 1)`,
  borderRadius: `3px`,
  width: `58px`,
  height: `22px`,
  position: `absolute`,
  left: `271px`,
  top: `39px`,
});

const Version = styled('div')({
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

const NavigationGroup = styled('div')({
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
  cursor: `pointer`,
  '&:hover': {
    color: 'white',
  },
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
  cursor: `pointer`,
  '&:hover': {
    color: 'white',
  },
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
  cursor: `pointer`,
  '&:hover': {
    color: 'white',
  },
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
  cursor: `pointer`,
  '&:hover': {
    color: 'white',
  },
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
  cursor: `pointer`,
  '&:hover': {
    color: 'rgb(108, 202, 255)',
  },
});

export default function NavbarDefault({
  scrollToTop,
  scrollToAbout,
  scrollToDownload,
  scrollToFeatures,
  scrollToContact,
  highlight,
  windowWidth,
}) {
  var navigate = useNavigate();
  return (
    <Base className="fixed">
      s<Rectangle3></Rectangle3>
      <Name>{`SITDE PK`}</Name>
      <Separator></Separator>
      <VersionBase></VersionBase>
      <Version>{`3.0`}</Version>
      <NavigationGroup>
        <About
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              scrollToAbout();
            }, 100);
          }}
        >
          {`about`}
        </About>
        <Download
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              scrollToDownload();
            }, 100);
          }}
        >
          {`download`}
        </Download>
        <Features
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              scrollToFeatures();
            }, 100);
          }}
        >
          {`features`}
        </Features>
        <Contact
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              scrollToContact();
            }, 100);
          }}
        >
          {`CONTACT`}
        </Contact>

        <Link to="https://fb.com/sitdebayquamon" target="_blank">
          <SitdeBayquamon>{`sitdeBAYQUAMON`}</SitdeBayquamon>
        </Link>
      </NavigationGroup>
    </Base>
  );
}

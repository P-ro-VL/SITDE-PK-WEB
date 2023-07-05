import React from 'react';

import DownloadBackgroundImage from '../../assets/images/mobile/DownloadMobile_DownloadBackground.png';

import SitdePk11Image from '../../assets/images/mobile/DownloadMobile_SITDE_PK__1__1.png';

import SitdePk31Image from '../../assets/images/mobile/DownloadMobile_SITDE_PK__3__1.png';

import { styled } from '@mui/material/styles';

const DownloadMobile1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `500px`,
  height: `422px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const DownloadBackground = styled('img')({
  height: `422px`,
  width: `815px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const DownloadTitle = styled('div')({
  textAlign: `justified`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `109px`,
  top: `31px`,
});

const DownloadImage = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `243px`,
  height: `168px`,
  left: `128px`,
  top: `201px`,
});

const SitdePk11 = styled('img')({
  height: `168px`,
  width: `180px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const SitdePk31 = styled('img')({
  height: `96px`,
  width: `153px`,
  position: `absolute`,
  left: `90px`,
  top: `72px`,
});

const DownloadButtonBase = styled('div')({
  background: `linear-gradient(180deg, rgba(108, 202, 255, 1) -3.0616171314629196e-15%, rgba(31, 98, 136, 1) 99.99999999999997%)`,
  borderRadius: `10px`,
  width: `443px`,
  height: `67px`,
  position: `absolute`,
  left: `28px`,
  top: `106px`,
});

const DownloadButtonContenSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  top: `-15px`,
});

const DownloadButtonContenSpan2 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `italic`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  top: `-15px`,
});

const DownloadButtonConten = styled('div')({
  textAlign: `justified`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: 'unset',
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  textShadow: `0px 4px 4px rgba(0, 0, 0, 0.1)`,
  width: `371px`,
  position: `absolute`,
  left: `73px`,
  top: `133px`,
});

const DownloadNote = styled('div')({
  textAlign: `justified`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `17px`,
  top: `397px`,
});

function DownloadMobile() {
  return (
    <DownloadMobile1>
      <DownloadBackground
        src={DownloadBackgroundImage}
        loading="lazy"
        alt={'DownloadBackground'}
      />
      <DownloadTitle>{`DOWNLOAD`}</DownloadTitle>
      <DownloadImage>
        <SitdePk11 src={SitdePk11Image} loading="lazy" alt={'SITDE PK (1) 1'} />
        <SitdePk31 src={SitdePk31Image} loading="lazy" alt={'SITDE PK (3) 1'} />
      </DownloadImage>
      <DownloadButtonBase></DownloadButtonBase>
      <DownloadButtonConten>
        <DownloadButtonContenSpan1>{`ĐANG CÓ MẶT TRÊN WINDOWS 7/8/10/11`}</DownloadButtonContenSpan1>
        <DownloadButtonContenSpan2>{`(*)`}</DownloadButtonContenSpan2>
      </DownloadButtonConten>
      <DownloadNote>
        {`(*) Hiện tại SITDE PK chưa hỗ trợ các hệ điều hành khác như macOS, Android, iOS, ...`}
      </DownloadNote>
    </DownloadMobile1>
  );
}

export default DownloadMobile;

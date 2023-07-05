import React from 'react';
import { Link } from 'react-router-dom';

import WallpaperImage from '../assets/images/DownloadSuccessBackground.png';

import { styled } from '@mui/material/styles';

const Base = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `100%`,
  height: `900px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Wallpaper = styled('img')({
  height: `100%`,
  width: `100%`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Title = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1121px`,
  height: `96px`,
  left: `203px`,
  top: `318px`,
});

const DownloadSuccessBase = styled('div')({
  backgroundColor: `rgba(108, 202, 255, 1)`,
  width: `1121px`,
  height: `96px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const DownloadSuccessTitle = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `64px`,
  letterSpacing: `1.92px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `29px`,
  top: `5px`,
});

const DownloadContent = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1064px`,
  height: `114px`,
  left: `203px`,
  top: `468px`,
});

const DownloadContentThankYou = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(25, 25, 25, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `32px`,
  letterSpacing: `0.96px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const DownloadContentDetailSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(25, 25, 25, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `32px`,
  letterSpacing: `0.96px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const DownloadContentDetailSpan2 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(8, 124, 250, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `32px`,
  letterSpacing: `0.96px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const DownloadContentDetailSpan3 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(25, 25, 25, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `32px`,
  letterSpacing: `0.96px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const DownloadContentDetail = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: 'unset',
  fontWeight: `400`,
  fontSize: `32px`,
  letterSpacing: `0.96px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `1064px`,
  position: `absolute`,
  left: `0px`,
  top: `46px`,
});

const BackToHome = styled('a')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `246px`,
  height: `55px`,
  left: `203px`,
  top: `636px`,
});

const BackToHomeBase = styled('div')({
  backgroundColor: `rgba(25, 25, 25, 1)`,
  borderRadius: `20px`,
  width: `246px`,
  height: `55px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const BackToHomeTitle = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `31px`,
  top: `10px`,
});

export default function DownloadSuccess() {
  return (
    <Base>
      <Wallpaper src={WallpaperImage} loading="lazy" alt={'image 6'} />
      <Title>
        <DownloadSuccessBase></DownloadSuccessBase>
        <DownloadSuccessTitle>{`DOWNLOAD SUCCESS`}</DownloadSuccessTitle>
      </Title>
      <DownloadContent>
        <DownloadContentThankYou>{`Cảm ơn bạn đã tải SITDE PK! `}</DownloadContentThankYou>
        <DownloadContentDetail>
          <DownloadContentDetailSpan1>{`Các tệp cài đặt sẽ được tự động tải về. Nếu trình duyệt không tự động tải về, bấm `}</DownloadContentDetailSpan1>
          <Link to={'https://bit.ly/SITDEPK'} target="_blank">
            <DownloadContentDetailSpan2>{`vào đây`}</DownloadContentDetailSpan2>
          </Link>
          <DownloadContentDetailSpan3>{` để tải thủ công.`}</DownloadContentDetailSpan3>
        </DownloadContentDetail>
      </DownloadContent>
      <Link to={'/'}>
        <BackToHome>
          <BackToHomeBase></BackToHomeBase>
          <BackToHomeTitle>{`Quay về trang chủ`}</BackToHomeTitle>
        </BackToHome>
      </Link>
    </Base>
  );
}

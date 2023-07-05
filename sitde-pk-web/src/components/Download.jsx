import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import WallpaperImage from '../assets/images/Download_image_3.png';

import SitdePk11Image from '../assets/images/Download_SITDE_PK__1__1.png';

import SitdePk31Image from '../assets/images/Download_SITDE_PK__3__1.png';

import VectorImage from '../assets/images/Download_Vector.png';

import Vector1Image from '../assets/images/Download_Vector.png';

import Vector2Image from '../assets/images/Download_Vector.png';

import Vector3Image from '../assets/images/Download_Vector.png';

import WindowLogoImage from '../assets/images/Download_image_4.png';

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
  textAlign: `justify`,
});

const Wallpaper = styled('img')({
  height: `900px`,
  width: `1600px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const DownloadTitle = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(230, 230, 230, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `64px`,
  letterSpacing: `1.92px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `96px`,
  top: `73px`,
});

const Group5 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `666px`,
  height: `460px`,
  left: `717px`,
  top: `281px`,
});

const SitdePk11 = styled('img')({
  height: `460px`,
  width: `493px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const SitdePk31 = styled('img')({
  height: `264px`,
  width: `419px`,
  position: `absolute`,
  left: `247px`,
  top: `196px`,
});

const IcoGroup = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `577px`,
  height: `601px`,
  left: `96px`,
  top: `193px`,
});

const Background = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  width: `577px`,
  height: `601px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const IconsaxLinearSetting = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `29px`,
  height: `29px`,
  left: `42px`,
  top: `191px`,
  overflow: `hidden`,
});

const Vector = styled('img')({
  height: `7.25px`,
  width: `7.25px`,
  position: `absolute`,
  left: `11px`,
  top: `11px`,
});

const Vector1 = styled('img')({
  height: `22.81px`,
  width: `24.18px`,
  position: `absolute`,
  left: `2px`,
  top: `3px`,
});

const IconsaxLinearWarning = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `29px`,
  height: `29px`,
  left: `42px`,
  top: `312px`,
  overflow: `hidden`,
});

const Vector2 = styled('img')({
  height: `24.17px`,
  width: `21.96px`,
  position: `absolute`,
  left: `4px`,
  top: `2px`,
});

const Vector3 = styled('img')({
  height: `0.12px`,
  width: `0px`,
  position: `absolute`,
  left: `15px`,
  top: `20px`,
});

const DownloadButtonGroup = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `493px`,
  height: `118px`,
  left: `138px`,
  top: `238px`,
});

const ButtonContentGroup = styled('a')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `493px`,
  height: `118px`,
  left: `0px`,
  top: `0px`,
  borderRadius: `20px`,
  cursor: `pointer`,
  background: `linear-gradient(180deg, rgba(110, 152, 234, 1) -3.0616171314629196e-15%, rgba(34, 59, 106, 1) 99.99999999999999%)`,
  '&:hover': {
    background: `linear-gradient(0deg, rgba(110, 152, 234, 1) -3.0616171314629196e-15%, rgba(34, 59, 106, 1) 99.99999999999999%)`,
  },
});

const ButtonContentTextSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `34px`,
  letterSpacing: `1.02px`,
  textDecoration: `none`,
  lineHeight: `30px`,
  textTransform: `none`,
});

const ButtonContentTextSpan2 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `italic`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  lineHeight: `30px`,
  textTransform: `none`,
});

const ButtonContentText = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: 'unset',
  fontWeight: `400`,
  fontSize: `nullpx`,
  letterSpacing: `NaNpx`,
  textDecoration: `none`,
  lineHeight: `30px`,
  textTransform: `none`,
  position: `absolute`,
  left: `157px`,
  top: `31px`,
});

const WindowLogo = styled('img')({
  height: `99px`,
  width: `99px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `49px`,
  top: `9px`,
});

const SystemRequirementSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `28px`,
  letterSpacing: `0.84px`,
  textDecoration: `none`,
  lineHeight: `35px`,
  textTransform: `none`,
});

const SystemRequirementSpan2 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `500`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  lineHeight: `35px`,
  textTransform: `none`,
});

const SystemRequirement = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: 'unset',
  fontWeight: `400`,
  fontSize: `nullpx`,
  letterSpacing: `NaNpx`,
  textDecoration: `none`,
  lineHeight: `35px`,
  textTransform: `none`,
  position: `absolute`,
  left: `179px`,
  top: `384px`,
});

const WarningGroupSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(194, 62, 62, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `28px`,
  letterSpacing: `0.84px`,
  textDecoration: `none`,
  lineHeight: `35px`,
  textTransform: `none`,
});

const WarningGroupSpan2 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `500`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  lineHeight: `35px`,
  textTransform: `none`,
});

const WarningGroup = styled('div')({
  textAlign: `justified`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: 'unset',
  fontWeight: `400`,
  fontSize: `nullpx`,
  letterSpacing: `NaNpx`,
  textDecoration: `none`,
  lineHeight: `35px`,
  textTransform: `none`,
  width: `444px`,
  height: `246px`,
  position: `absolute`,
  left: `179px`,
  top: `504px`,
});

export default function Download({ position }) {
  const navigate = useNavigate();
  var downloadPath =
    'https://firebasestorage.googleapis.com/v0/b/sitde-pk-web.appspot.com/o/SITDE%20PK%203.0.zip?alt=media&token=9ee5f90a-bc8e-45db-a63b-8144c689cc82';
  return (
    <div ref={position}>
      <Base>
        <Wallpaper src={WallpaperImage} loading="lazy" />
        <DownloadTitle>{`DOWNLOAD`}</DownloadTitle>
        <Group5>
          <SitdePk11 src={SitdePk11Image} loading="lazy" />
          <SitdePk31 src={SitdePk31Image} loading="lazy" />
        </Group5>
        <IcoGroup>
          <Background></Background>
          <IconsaxLinearSetting>
            <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
            <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
          </IconsaxLinearSetting>
          <IconsaxLinearWarning>
            <Vector2 src={Vector2Image} loading="lazy" alt={'Vector'} />
            <Vector3 src={Vector3Image} loading="lazy" alt={'Vector'} />
          </IconsaxLinearWarning>
        </IcoGroup>
        <DownloadButtonGroup>
          <Link
            to={downloadPath}
            target="_blank"
            onClick={() => {
              setTimeout(() => {
                navigate('/download-success');
              }, 100);
            }}
          >
            <ButtonContentGroup>
              <ButtonContentText>
                <ButtonContentTextSpan1>{`Tải cho Windows 
`}</ButtonContentTextSpan1>
                <ButtonContentTextSpan2>{`(32 bits/64 bits)`}</ButtonContentTextSpan2>
              </ButtonContentText>
              <WindowLogo src={WindowLogoImage} loading="lazy" />
            </ButtonContentGroup>
          </Link>
        </DownloadButtonGroup>
        <SystemRequirement>
          <SystemRequirementSpan1>{`Yêu cầu cấu hình:
`}</SystemRequirementSpan1>
          <SystemRequirementSpan2>{`Windows 7/8/10/11
RAM 1 GB trở lên
`}</SystemRequirementSpan2>
        </SystemRequirement>
        <WarningGroup>
          <WarningGroupSpan1>{`Lưu ý:
`}</WarningGroupSpan1>
          <WarningGroupSpan2>{`SITDE PK yêu cầu cần có môi trường .NET để chạy. Nếu máy bạn chưa có môi trường .NET, trình cài đặt của SITDE PK sẽ tự động cài đặt cho bạn.
Khi cài đặt nên tắt toàn bộ các phần mềm diệt virus, kể cả Windows Defender
`}</WarningGroupSpan2>
        </WarningGroup>
      </Base>
    </div>
  );
}

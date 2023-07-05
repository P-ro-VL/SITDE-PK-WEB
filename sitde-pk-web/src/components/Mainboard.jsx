import React from 'react';

import WallpaperImage from '../assets/images/Mainboard_wallpaper.png';

import PreviewImageImage from '../assets/images/Mainboard_sitdepk1.png';

import IconsaxBoldWindowsImage from '../assets/images/Mainboard_Iconsax_Bold_windows.png';

import { styled } from '@mui/material/styles';

const Base = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  textAlign: `justify`,
  width: `100%`,
  height: `900px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Wallpaper = styled('img')({
  height: `1152px`,
  width: `1920px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `-4px`,
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
  width: `596px`,
  height: `141px`,
  left: `85px`,
  top: `225px`,
});

const Name = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `80px`,
  letterSpacing: `2.4px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const NameDesc = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `500`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `99px`,
});

const SideImageGroup = styled('div')({
  boxShadow: `-4px 4px 4px rgba(0, 0, 0, 0.1)`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1079px`,
  height: `678.93px`,
  left: `796px`,
  top: `111px`,
});

const Rectangle = styled('div')({
  backgroundColor: `rgba(239, 239, 239, 1)`,
  border: `1px solid rgba(208, 208, 208, 0.3)`,
  boxSizing: `border-box`,
  borderRadius: `60px`,
  width: `1079px`,
  height: `678.93px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const PreviewImage = styled('img')({
  height: `643.39px`,
  width: `1015.21px`,
  objectFit: `cover`,
  position: `absolute`,
  borderRadius: `60px`,
  left: `20px`,
  top: `17px`,
});

const DownloadButtonGroup = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexdirection: `row`,
  justifycontent: `flex-start`,
  alignitems: `flex-start`,
  padding: `0px`,
  boxsizing: `border-box`,
  width: `416px`,
  height: `76px`,
  left: `85px`,
  top: `610px`,
  color: `white`,
  borderRadius: `20px`,
  cursor: `pointer`,
  '&:hover': {
    background: `linear-gradient(-35deg, rgba(108, 202, 255, 1) -3.0616171314629196e-15%, rgba(75, 141, 178, 1) 99.99999999999999%)`,
    textShadow: `2.5px 2.5px rgba(0, 0, 0, 0.15)`,
  },
});

const DownloadButtonBorder = styled('div')({
  backgroundColor: `rgba(50, 76, 129, 0)`,
  border: `3px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `20px`,
  width: `416px`,
  height: `76px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const IconsaxBoldWindows = styled('img')({
  height: `50px`,
  width: `50px`,
  position: `absolute`,
  //  '-webkit-filter': `drop-shadow(5px 5px 5px #222222)`,
  filter: `drop-shadow(2.5px 2.5px 1px rgba(0, 0, 0, 0.15))`,
  left: `25px`,
  top: `14px`,
});

const DownloadButtonContent = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `28px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `89px`,
  top: `18px`,
});

const Description = styled('div')({
  textAlign: `justified`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(151, 151, 151, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `500`,
  fontSize: `28px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `598px`,
  position: `absolute`,
  left: `85px`,
  top: `399px`,
});

function Mainboard({ scrollToDownload }) {
  return (
    <Base>
      <Wallpaper src={WallpaperImage} loading="lazy" />
      <NameGroup>
        <Name>{`SITDE PK`}</Name>
        <NameDesc>{`ĐẠI CHIẾN ĐỀ THI - LẤY NGAY A+`}</NameDesc>
      </NameGroup>

      <SideImageGroup>
        <Rectangle></Rectangle>
        <PreviewImage src={PreviewImageImage} loading="lazy" />
      </SideImageGroup>

      <DownloadButtonGroup
        onClick={() => {
          setTimeout(() => {
            scrollToDownload();
          }, 100);
        }}
      >
        <DownloadButtonBorder></DownloadButtonBorder>
        <IconsaxBoldWindows src={IconsaxBoldWindowsImage} loading="lazy" />
        <DownloadButtonContent>{`Tải xuống cho Windows`}</DownloadButtonContent>
      </DownloadButtonGroup>

      <Description>
        {`Phần mềm hỗ trợ sinh viên ôn tập kiến thức dưới hình thức trắc nghiệm, phát triển bởi sinh viên Viện Công nghệ thông tin và Kinh tế số, trường Đại học Kinh tế Quốc dân.`}
      </Description>
    </Base>
  );
}

export default Mainboard;

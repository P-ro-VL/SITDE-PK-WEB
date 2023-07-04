import React from 'react';

import WallpaperImage from '../assets/images/Mainboard_wallpaper.png';

import Sitdepk1Image from '../assets/images/Mainboard_sitdepk1.png';

import IconsaxBoldWindowsImage from '../assets/images/Mainboard_Iconsax_Bold_windows.png';

import { styled } from '@mui/material/styles';

const Mainboard1 = styled('div')({
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

const Group2 = styled('div')({
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

const SitdePk = styled('div')({
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

const IChiNThiLYNgayA = styled('div')({
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

const Group1 = styled('div')({
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

const Rectangle1 = styled('div')({
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

const Sitdepk1 = styled('img')({
  height: `643.39px`,
  width: `1015.21px`,
  objectFit: `cover`,
  position: `absolute`,
  borderRadius: `60px`,
  left: `20px`,
  top: `17px`,
});

const Group3 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `416px`,
  height: `76px`,
  left: `85px`,
  top: `548px`,
});

const Rectangle2 = styled('div')({
  backgroundColor: `rgba(50, 76, 129, 0)`,
  border: `3px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `20px`,
  width: `416px`,
  height: `76px`,
  position: `absolute`,
  left: `0px`,
  top: `50px`,
});

const IconsaxBoldWindows = styled('img')({
  height: `50px`,
  width: `50px`,
  position: `absolute`,
  left: `25px`,
  top: `63px`,
});

const TIXuNgChoWindows = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `28px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `89px`,
  top: `65px`,
});

const PhNMMHTrSinhViênÔnTP = styled('div')({
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

function Mainboard() {
  return (
    <Mainboard1>
      <Wallpaper src={WallpaperImage} loading="lazy" alt={'wallpaper'} />
      <Group2>
        <SitdePk>{`SITDE PK`}</SitdePk>
        <IChiNThiLYNgayA>{`ĐẠI CHIẾN ĐỀ THI - LẤY NGAY A+`}</IChiNThiLYNgayA>
      </Group2>
      <Group1>
        <Rectangle1></Rectangle1>
        <Sitdepk1 src={Sitdepk1Image} loading="lazy" alt={'sitdepk1'} />
      </Group1>
      <Group3>
        <Rectangle2></Rectangle2>
        <IconsaxBoldWindows
          src={IconsaxBoldWindowsImage}
          loading="lazy"
          alt={'Iconsax/Bold/windows'}
        />
        <TIXuNgChoWindows>{`Tải xuống cho Windows`}</TIXuNgChoWindows>
      </Group3>
      <PhNMMHTrSinhViênÔnTP>
        {`Phần mềm hỗ trợ sinh viên ôn tập kiến thức dưới hình thức trắc nghiệm, phát triển bởi sinh viên Viện Công nghệ thông tin và Kinh tế số, trường Đại học Kinh tế Quốc dân.`}
      </PhNMMHTrSinhViênÔnTP>
    </Mainboard1>
  );
}

export default Mainboard;

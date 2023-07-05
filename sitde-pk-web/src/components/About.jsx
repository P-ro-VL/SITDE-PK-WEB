import React from 'react';

import MoreInfoIco from '../assets/images/About_Vector.png';

import { styled } from '@mui/material/styles';

const Base = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `100%`,
  height: `813px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  textAlign: `justify`,
});

const Base2 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(36, 36, 37, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `64px`,
  letterSpacing: `1.92px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `997px`,
  top: `73px`,
});

const AboutContentSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  lineHeight: `35px`,
  textTransform: `none`,
});

const AboutContentSpan2 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  lineHeight: `35px`,
  textTransform: `none`,
});

const AboutContentSpan3 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  lineHeight: `35px`,
  textTransform: `none`,
});

const AboutContentSpan4 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  lineHeight: `35px`,
  textTransform: `none`,
});

const AboutContentSpan5 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `italic`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  lineHeight: `35px`,
  textTransform: `none`,
});

const AboutContentSpan6 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  lineHeight: `35px`,
  textTransform: `none`,
});

const AboutContent = styled('div')({
  textAlign: `justified`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: 'unset',
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  lineHeight: `35px`,
  textTransform: `none`,
  width: `690px`,
  height: `471px`,
  position: `absolute`,
  left: `648px`,
  top: `181px`,
});

const MoreInfoButton = styled('a')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `245.17px`,
  height: `48px`,
  left: `902px`,
  top: `692px`,
  borderRadius: `20px`,
});

const ButtonBackground = styled('div')({
  backgroundColor: `rgba(36, 36, 37, 1)`,
  borderRadius: `20px`,
  width: `203px`,
  height: `48px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const ButtonContent = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `221.17px`,
  height: `22.47px`,
  left: `24px`,
  top: `12px`,
});

const ButtonText = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0.48px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `4px`,
});

const Vector = styled('img')({
  height: `11px`,
  width: `15px`,
  position: `absolute`,
  left: `132px`,
  top: `7px`,
});

export default function About({ position }) {
  return (
    <div ref={position}>
      <Base>
        <Base2>{`ABOUT`}</Base2>
        <AboutContent>
          <AboutContentSpan1>{`SITDE PK`}</AboutContentSpan1>
          <AboutContentSpan2>{` là dự án công nghệ phát triển bởi sinh viên `}</AboutContentSpan2>
          <AboutContentSpan3>{`Viện Công nghệ thông tin và Kinh tế số (SITDE)`}</AboutContentSpan3>
          <AboutContentSpan4>{`, trường Đại học Kinh tế Quốc dân. Dự án được bắt đầu vào ngày 22/12/2022. Xuất phát từ vấn đề khó khăn khi thiếu đi nguồn tài liệu để ôn tập và tự luyện dưới dạng trắc nghiệm của sinh viên khóa 64`}</AboutContentSpan4>
          <AboutContentSpan5>{` (khóa đầu tiên chuyển sang hình thức thi trắc nghiệm 100%, trong khi các khóa trước đó hầu hết là thi tự luận)`}</AboutContentSpan5>
          <AboutContentSpan6>{`, SITDE PK ra đời với mong muốn sẽ là địa điểm học tập và ôn luyện tin cậy của các bạn sinh viên trường Đại học Kinh tế Quốc dân, nhất là đối với các bạn sinh viên thuộc Viện Công nghệ thông tin và Kinh tế số.
Hy vọng rằng, trong tương lai, SITDE PK sẽ tiếp tục phát triển hơn nữa, mở rộng thêm ra nhiều các học phần của các ngành, khoa/viện khác để trở thành nơi ôn luyện tin cậy không chỉ của sinh viên SITDE mà còn của tất cả các sinh viên NEU.`}</AboutContentSpan6>
        </AboutContent>
        <MoreInfoButton href="https://fb.com/sitdepk" target="_blank">
          <ButtonBackground></ButtonBackground>
          <ButtonContent>
            <ButtonText>{`Tìm hiểu thêm`}</ButtonText>
            <Vector src={MoreInfoIco} loading="lazy" />
          </ButtonContent>
        </MoreInfoButton>
        <iframe
          style={{
            width: `534px`,
            height: `292px`,
            position: `absolute`,
            left: `57px`,
            top: `268px`,
          }}
          width="534"
          height="292"
          src="https://www.youtube.com/embed/EL_R5ZXu6VA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Base>
    </div>
  );
}

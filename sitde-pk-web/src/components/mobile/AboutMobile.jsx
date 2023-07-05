import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';

const AboutMobile1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `500px`,
  height: `735px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const AboutTitle = styled('div')({
  textAlign: `justified`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `165px`,
  top: `29px`,
});

const AboutContentSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0.42px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  textAlign: `justify`,
});

const AboutContentSpan2 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0.42px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
});

const AboutContentSpan3 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0.42px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
});

const AboutContentSpan4 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0.42px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
});

const AboutContentSpan5 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `italic`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0.42px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
});

const AboutContentSpan6 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0.42px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
});

const AboutContent = styled('div')({
  textAlign: `justify`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: 'unset',
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0.42px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  width: `427px`,
  height: `316px`,
  position: `absolute`,
  left: `36px`,
  top: `96px`,
});

const AboutVideo = styled('div')({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  width: `345px`,
  height: `212px`,
  position: `absolute`,
  left: `77px`,
  top: `493px`,
});

const MoreInfoButtonBase = styled('div')({
  backgroundColor: `rgba(25, 25, 25, 1)`,
  borderRadius: `20px`,
  width: `144px`,
  height: `35px`,
  position: `absolute`,
  left: `178px`,
  top: `428px`,
});

const MoreInfoButtonConten = styled('div')({
  textAlign: `justified`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0.36px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `210px`,
  top: `438px`,
});

function AboutMobile() {
  return (
    <AboutMobile1>
      <AboutTitle>{`ABOUT`}</AboutTitle>
      <AboutContent>
        <AboutContentSpan1>{`SITDE PK`}</AboutContentSpan1>
        <AboutContentSpan2>{` là dự án công nghệ phát triển bởi sinh viên `}</AboutContentSpan2>
        <AboutContentSpan3>{`Viện Công nghệ thông tin và Kinh tế số (SITDE)`}</AboutContentSpan3>
        <AboutContentSpan4>{`, trường Đại học Kinh tế Quốc dân. Dự án được bắt đầu vào ngày 22/12/2022. Xuất phát từ vấn đề khó khăn khi thiếu đi nguồn tài liệu để ôn tập và tự luyện dưới dạng trắc nghiệm của sinh viên khóa 64`}</AboutContentSpan4>
        <AboutContentSpan5>{` (khóa đầu tiên chuyển sang hình thức thi trắc nghiệm 100%, trong khi các khóa trước đó hầu hết là thi tự luận)`}</AboutContentSpan5>
        <AboutContentSpan6>{`, SITDE PK ra đời với mong muốn sẽ là địa điểm học tập và ôn luyện tin cậy của các bạn sinh viên trường Đại học Kinh tế Quốc dân, nhất là đối với các bạn sinh viên thuộc Viện Công nghệ thông tin và Kinh tế số.
Hy vọng rằng, trong tương lai, SITDE PK sẽ tiếp tục phát triển hơn nữa, mở rộng thêm ra nhiều các học phần của các ngành, khoa/viện khác để trở thành nơi ôn luyện tin cậy không chỉ của sinh viên SITDE mà còn của tất cả các sinh viên NEU.`}</AboutContentSpan6>
      </AboutContent>
      <AboutVideo></AboutVideo>
      <Link to="https://fb.com/sitdebayquamon">
        <MoreInfoButtonBase></MoreInfoButtonBase>
        <MoreInfoButtonConten>{`Tìm hiểu thêm`}</MoreInfoButtonConten>
      </Link>
    </AboutMobile1>
  );
}

export default AboutMobile;

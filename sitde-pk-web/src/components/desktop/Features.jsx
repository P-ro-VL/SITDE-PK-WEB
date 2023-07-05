import React from 'react';

import { styled } from '@mui/material/styles';

import FeatureOne from '../../assets/images/desktop/Features_1.png';
import FeatureTwo from '../../assets/images/desktop/Features_2.png';
import FeatureThree from '../../assets/images/desktop/Features_3.png';
import FeatureFour from '../../assets/images/desktop/Features_4.png';

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

const FeaturesTitle = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(25, 25, 25, 1)`,
  fontStyle: `normal`,
  fontFamily: `LCK Title`,
  fontWeight: `400`,
  fontSize: `64px`,
  letterSpacing: `1.92px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `458px`,
  top: `89px`,
});

const Group = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  textAlign: `justify`,
  alignItems: `flex-start`,
  alignSelf: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1348px`,
  height: `591px`,
  left: `46px`,
  top: `220px`,
});

const FeatureOneImg = styled('img')({
  width: `262px`,
  height: `262px`,
  position: `absolute`,
  borderRadius: `10px`,
  left: `0px`,
  top: `0px`,
});

const FeatureTwoImg = styled('img')({
  width: `262px`,
  height: `262px`,
  position: `absolute`,
  borderRadius: `10px`,
  left: `0px`,
  top: `329px`,
});

const FeatureThreeImg = styled('img')({
  width: `262px`,
  height: `262px`,
  position: `absolute`,
  borderRadius: `10px`,
  left: `684px`,
  top: `0px`,
});

const FeatureFourImg = styled('img')({
  width: `262px`,
  height: `262px`,
  position: `absolute`,
  borderRadius: `10px`,
  left: `684px`,
  top: `329px`,
});

const FeaturesOneContentSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0.72px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const FeaturesOneContentSpan3 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const FeaturesOneContent = styled('div')({
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
  textTransform: `none`,
  width: `382px`,
  height: `255px`,
  position: `absolute`,
  left: `282px`,
  top: `7px`,
});

const FeaturesTwoContentSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0.72px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const FeaturesTwoContentSpan3 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const FeaturesTwoContent = styled('div')({
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
  textTransform: `none`,
  width: `382px`,
  height: `255px`,
  position: `absolute`,
  left: `282px`,
  top: `336px`,
});

const FeaturesFourContentSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0.72px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const FeaturesFourContentSpan3 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const FeaturesFourContent = styled('div')({
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
  textTransform: `none`,
  width: `382px`,
  height: `255px`,
  position: `absolute`,
  left: `966px`,
  top: `329px`,
});

const FeaturesThreeContentSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0.72px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const FeaturesThreeContentSpan3 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SVN-Gilroy`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0.6px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const FeaturesThreeContent = styled('div')({
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
  textTransform: `none`,
  width: `382px`,
  height: `255px`,
  position: `absolute`,
  left: `966px`,
  top: `7px`,
});

export default function Features({ position }) {
  return (
    <div ref={position}>
      <Base>
        <div
          style={{ width: '100%' }}
          className="flex justify-center items-center"
        >
          <FeaturesTitle>{`FEATURES`}</FeaturesTitle>
          <Group>
            <FeatureOneImg src={FeatureOne} loading="lazy" />
            <FeatureTwoImg src={FeatureTwo} loading="lazy" />
            <FeatureThreeImg src={FeatureThree} loading="lazy" />
            <FeatureFourImg src={FeatureFour} loading="lazy" />
            <FeaturesOneContent>
              <FeaturesOneContentSpan1>{`BÀI TẬP THEO CHƯƠNG
`}</FeaturesOneContentSpan1>
              <FeaturesOneContentSpan3>{`Thỏa sức ôn luyện cùng với các học phần có sẵn trên SITDE PK. Bài ôn luyện được chia theo chương, sát với chương trình học của trường. Dễ dàng cho các bạn sinh viên ôn tập, nắm bắt được phần kiến thức còn yếu, hổng.`}</FeaturesOneContentSpan3>
            </FeaturesOneContent>
            <FeaturesTwoContent>
              <FeaturesTwoContentSpan1>{`THI THỬ NHƯ THI THẬT
`}</FeaturesTwoContentSpan1>
              <FeaturesTwoContentSpan3>{`Gần đến các kỳ thi, SITDE PK sẽ mở các bài thi thử có thời gian mở cố định và không thể vào muộn quá 15 phút.
Giao diện thi thử giống của trường mang lại cảm giác “thi thử như thi thật”, giúp sinh viên rèn luyện sự tự tin và bản lĩnh phòng thi.`}</FeaturesTwoContentSpan3>
            </FeaturesTwoContent>
            <FeaturesThreeContent>
              <FeaturesThreeContentSpan1>{`ĐỀ CƯƠNG TÓM TẮT
`}</FeaturesThreeContentSpan1>
              <FeaturesThreeContentSpan3>{`Bộ đề cương tóm tắt kiến thức siêu trọng tâm được biên soạn rất chi tiết từ Sitdebayquamon chắc chắn sẽ là cơ hội để các bạn sinh viên “lấy lại gốc” và rà soát kiến thức một cách nhanh chóng.`}</FeaturesThreeContentSpan3>
            </FeaturesThreeContent>
            <FeaturesFourContent>
              <FeaturesFourContentSpan1>{`VÀ VÔ SỐ TÍNH NĂNG THÚ VỊ KHÁC ....
`}</FeaturesFourContentSpan1>
              <FeaturesFourContentSpan3>{`Bên cạnh đó SITDE PK còn vô số tính năng thú vị khác như bói bài tarot, bấm giờ khoa học, ... đều sẽ là những trợ thủ đắc lực trong quá trình ôn luyện của các bạn sinh viên.`}</FeaturesFourContentSpan3>
            </FeaturesFourContent>
          </Group>
        </div>
      </Base>
    </div>
  );
}

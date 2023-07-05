import React from 'react';

import BackgroundImage from '../../assets/images/mobile/MainboardMobile_Background.png';

import { styled } from '@mui/material/styles';

const MainboardMobile1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `500px`,
  height: `286px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Background = styled('img')({
  height: `286px`,
  width: `500px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const FilterGroup = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `500px`,
  height: `286px`,
  left: `0px`,
  top: `0px`,
});

const Rectangle6 = styled('div')({
  background: `linear-gradient(90deg, rgba(0, 0, 0, 1) -23.999999113082893%, rgba(217, 217, 217, 0) 99.99999999999999%)`,
  width: `100px`,
  height: `286px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Rectangle7 = styled('div')({
  background: `linear-gradient(90deg, rgba(0, 0, 0, 1) -23.999999113082893%, rgba(217, 217, 217, 0) 99.99999999999999%)`,
  width: `100px`,
  height: `286px`,
  position: `absolute`,
  left: `600px`,
  top: `286px`,
});

function MainboardMobile() {
  return (
    <MainboardMobile1>
      <Background src={BackgroundImage} loading="lazy" alt={'Background'} />
      <FilterGroup>
        <Rectangle6></Rectangle6>
        <Rectangle7></Rectangle7>
      </FilterGroup>
    </MainboardMobile1>
  );
}

export default MainboardMobile;

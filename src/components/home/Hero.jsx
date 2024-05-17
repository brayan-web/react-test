

import React from 'react';
import styled from 'styled-components';
import ImageBgHero from '../../assets/img/home/bg-banner.png';

const ContainerHero = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url(${ImageBgHero});
  background-size: cover;
  background-position: center;
  position: relative;
`

const Hero = () => {
  return (
    <ContainerHero>
    </ContainerHero>
  )
}

export default Hero

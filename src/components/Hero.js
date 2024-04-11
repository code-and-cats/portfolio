import React from 'react'
import { styled } from 'styled-components'

const Hero = () => {
  return (
    <DesktopView>
      <LogoWrapper>
        <LogoImg src="../img/logo.svg" alt="" />
      </LogoWrapper>
      <HeaderWrapper>
        <HeroWrapper>
          <InfoCard>
            <ProfilePic src="../img/vio.jpg" alt="Close-up of Vio" />
            <NameWrapper>
              <NameH1>Vio Szabo</NameH1>
              <Tagline>Front end developer</Tagline>
              <SecondTagline>+ communicator and author</SecondTagline>
            </NameWrapper>
          </InfoCard>
          <HeroP>
            I'm passionate about constantly expanding my knowledge and thrive
            when I challenge myself. I love pets and being in the outdoors.
          </HeroP>
          <SoMeWrapper>
            <a href="https://www.linkedin.com/in/vio-szabo/">
              <SocialLink src="../img/ln-grey.svg" alt="Linkedin profile" />
            </a>
            <a href="https://github.com/code-and-cats">
              <SocialLink src="../img/github-grey.svg" alt="GitHub profile" />
            </a>
          </SoMeWrapper>
        </HeroWrapper>
        <ScrollWrapper title="lets scroll">
          <Arrow src="../img/arrow.svg" alt="" />
          <ScrollText href="#tech-header">Let's scroll!</ScrollText>
        </ScrollWrapper>
      </HeaderWrapper>
    </DesktopView>
  )
}

export default Hero

const DesktopView = styled.section`
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
  }
`

const LogoImg = styled.img`
  @media (min-width: 744px) and (max-width: 1279px) {
    width: 100%;
    max-height: 150px;
    margin: auto;
  }

  @media (min-width: 1280px) {
    max-width: 250px;
  }
`

const LogoWrapper = styled.div`
  display: none;

  @media (min-width: 744px) and (max-width: 1279px) {
    display: flex;
    background-color: #84b4bf;
    justify-content: center;
    min-height: 20vh;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  @media (min-width: 1280px) {
    grid-column-start: 2;
    grid-row-start: 1;
    display: flex;
    background-color: #84b4bf;
    justify-content: center;
  }
`

const HeaderWrapper = styled.header`
  padding-bottom: 1em;
  min-height: 100vh;

  @media (min-width: 744px) and (max-width: 1279px) {
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
  }

  @media (min-width: 1280px) {
    grid-row-start: 1;
    grid-column-start: 1;
    padding-bottom: 0;
  }
`

const HeroP = styled.p`
  font-size: 22px;
  line-height: 29px;

  @media (min-width: 744px) {
    margin-left: 5%;
  }
`

const HeroWrapper = styled.div`
  width: 327px;
  padding-top: 3em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 744px) {
    width: 540px;
    display: grid;
    align-items: center;
    align-self: center;
  }

  @media (min-width: 1280px) {
    margin-top: 120px;
  }
`

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media (min-width: 744px) {
    display: grid;
    gap: 29px;
    margin-right: 5%;
  }
`

const ProfilePic = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;

  @media (min-width: 744px) {
    max-width: 164px;
    max-height: 100%;
  }
`

const NameH1 = styled.h1`
  color: #1f596e;
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 15px;
  margin-top: 29px;
`

const Tagline = styled.h2`
  font-weight: 700;
  color: black;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 0;
`

const SecondTagline = styled.h2`
  font-size: 18px;
  color: #565656;
  margin-top: 0;
`

const NameWrapper = styled.div`
  @media (min-width: 744px) {
    grid-column-start: 2;
    align-self: center;
  }
`

const SoMeWrapper = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: space-around;
  gap: 3rem;

  @media (min-width: 744px) {
    justify-content: flex-start;
    align-items: center;
    margin-left: 5%;
  }
`

const SocialLink = styled.img`
  &:hover {
    filter: brightness(0%);
  }
`
const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: underline 3px;

  @media (min-width: 1280px) {
    position: absolute;
    bottom: 50px;
    width: 100%;
  }
`
const Arrow = styled.img`
  margin-bottom: 25px;
`

const ScrollText = styled.h3`
  font-size: 16px;
  margin-top: 15px;
  text-align: center;

  &.a {
    color: black;
  }
`

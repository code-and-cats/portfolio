import React from 'react'
import { styled } from 'styled-components'

const InfoCard = () => {
  return (
    <InfoWrapper>
      <ProfilePic src="../img/vio.jpg" alt="Close-up of Vio" />
      <NameWrapper>
        <NameH1>Vio Szabo</NameH1>
        <Tagline>Communicator</Tagline>
        <SecondTagline>+ author and frontend developer</SecondTagline>
      </NameWrapper>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.div`
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

export default InfoCard

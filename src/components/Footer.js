import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <FooterHeader>Time to talk</FooterHeader>
      <FooterCard>
        <div>
          <StyledImg src="../img/vio.jpg" alt="Close-up of Vio" />
        </div>
        <NameWrapper>
          <h1>Vio Szabo</h1>
          <TagLine>Frontend developer</TagLine>
          <SecondTagline>+ author and communications expert</SecondTagline>
          <SecondTagline>+46736383556</SecondTagline>
        </NameWrapper>
        <SocialMediaWrapper>
          <a href="https://www.linkedin.com/in/vio-szabo/">
            <SocialLink src="../img/ln-grey.svg" alt="Linkedin profile" />
          </a>
          <a href="https://github.com/code-and-cats">
            <SocialLink src="../img/github-grey.svg" alt="GitHub profile" />
          </a>
        </SocialMediaWrapper>
      </FooterCard>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: white;
  padding-bottom: 60px;

  @media (min-width: 744px) {
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const FooterCard = styled.div`
  width: 327px;
  padding-top: 4rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 744px) {
    display: grid;
    gap: 29px;
    width: 500px;
  }

  @media (min-width: 1280px) {
    width: 620px;
  }
`

const FooterHeader = styled.h2`
  font-family: 'Satoshi-Black';
  color: #574283;
  font-size: 58px;
  text-align: center;
  padding-top: 40px;

  @media (min-width: 744px) {
    font-size: 120px;
    color: #675673;
  }
`

const StyledImg = styled.img`
  border-radius: 50%;
  padding-right: 0.5em;
`
const NameWrapper = styled.div`
  @media (min-width: 744px) {
    grid-column-start: 2;
    align-self: center;
  }
`

const TagLine = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin: 0;
`

const SecondTagline = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  color: #565656;
  margin: 0;
`

const SocialLink = styled.img`
  &:hover {
    filter: brightness(0%);
  }
`

const SocialMediaWrapper = styled.div`¨
display: flex;
align-items: center;
justify-content: flex-start;
gap: 20px;

@media(min-width: 744px) {
  grid-row-start: 3;
  grid-column-start: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 140px;
}
`

export default Footer

import React from 'react'
import { styled } from 'styled-components'

const Tech = () => {
  return (
    <StyledSection>
      <Wrapper>
        <StyledH2>Tech</StyledH2>
        <p>
          HTML5, CSS3, <Red>JavaScript,</Red> JSX,<Green> React,</Green> Redux,
          Node.js, MongoDB, GitHub, REST APIs,
          <Purple>Figma</Purple> PHP, Wordpress development
        </p>
      </Wrapper>
    </StyledSection>
  )
}

export default Tech

const StyledSection = styled.section`
  background-color: #dee5ff;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
`

const Wrapper = styled.div`
  width: 327px;
  margin: auto;
  align-content: center;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 500px;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 140px;
    width: 820px;
  }
`

const StyledH2 = styled.h2`
  font-size: 80px;
  color: #574283;
  margin-bottom: 2rem;
`

const Red = styled.mark`
  background-color: #7a2420;
  color: white;
`

const Green = styled.mark`
  background-color: #137565;
  color: white;
`

const Purple = styled.mark`
  background-color: #574283;
  color: white;
`

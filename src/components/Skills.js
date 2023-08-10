import React from 'react'
import { styled } from 'styled-components'

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsHeader>Skills</SkillsHeader>
      <SkillsList>
        <ListWrapper>
          <SkillsSubHeader>Code</SkillsSubHeader>
          <StyledUl>
            <StyledLi>HTML5</StyledLi>
            <StyledLi>CSS3</StyledLi>
            <StyledLi>Javascript ES6</StyledLi>
            <StyledLi>React</StyledLi>
            <StyledLi>Redux</StyledLi>
            <StyledLi>Styled Components</StyledLi>
            <StyledLi>Node.js</StyledLi>
          </StyledUl>
        </ListWrapper>
        <ListWrapper>
          <SkillsSubHeaderTool>Toolbox</SkillsSubHeaderTool>
          <StyledUl>
            <StyledLi>Adobe Photoshop</StyledLi>
            <StyledLi>Adobe Illustrator</StyledLi>
            <StyledLi>Adobe Premiere</StyledLi>
            <StyledLi>Figma</StyledLi>
            <StyledLi>GitHub</StyledLi>
          </StyledUl>
        </ListWrapper>
        <ListWrapper>
          <SkillsSubHeaderMore>More</SkillsSubHeaderMore>
          <StyledUl>
            <StyledLi>Interpersonal skills</StyledLi>
            <StyledLi>Agile methodology</StyledLi>
            <StyledLi>Workshop facilitation</StyledLi>
            <StyledLi>Norm criticism and inclusiveness</StyledLi>
          </StyledUl>
        </ListWrapper>
        <ListWrapper>
          <SkillsSubHeaderComm>Comms</SkillsSubHeaderComm>
          <StyledUl>
            <StyledLi>Strategy</StyledLi>
            <StyledLi>Crisis communication</StyledLi>
            <StyledLi>Proofreading</StyledLi>
            <StyledLi>Editing</StyledLi>
            <StyledLi>Content creation</StyledLi>
            <StyledLi>Klarspråk</StyledLi>
            <StyledLi>GDPR</StyledLi>
          </StyledUl>
        </ListWrapper>
      </SkillsList>
    </SkillsSection>
  )
}

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: #fcf5e8;
  padding-top: 80px;
  padding-bottom: 120px;

  @media (min-width: 744px) and (max-width: 1279px) {
    height: 1059px;
    padding-bottom: 0;
  }
`

const SkillsList = styled.div`
  width: 327px;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 400px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 60px;
  }

  @media (min-width: 1280px) {
    width: 900px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 70px;
  }
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
`

const SkillsHeader = styled.h2`
  font-size: 80px;
  color: #824c5b;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 744px) and (max-width: 1279px) {
    margin: unset;
    margin-top: 60px;
    margin-bottom: 40px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 79px;
  }
`

const SkillsSubHeader = styled.h3`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  background: #137565;
  height: 36px;
  padding: 2px;
  color: #ffffff;
  margin-top: 66px;

  @media (min-width: 744px) and (max-width: 1279px) {
    margin-top: 0;
    align-self: unset;
  }

  @media (min-width: 1280px) {
    margin-bottom: 16px;
    margin-top: 0;
  }
`
const SkillsSubHeaderTool = styled(SkillsSubHeader)`
  background: #574283;
`
const SkillsSubHeaderMore = styled(SkillsSubHeader)`
  background: #7a2420;
`
const SkillsSubHeaderComm = styled(SkillsSubHeader)`
  background: #646875;
`

const StyledUl = styled.ul`
  margin: 0px;
  padding: 0px;
`

const StyledLi = styled.li`
  list-style: none;
  font-family: 'EB Garamond';
  font-size: 22px;
  line-height: 32px;
  text-align: center;

  @media (min-width: 744px) and (max-width: 1279px) {
    text-align: left;
    font-size: 22px;
    line-height: 32px;
  }

  @media (min-width: 1280px) {
    text-align: left;
  }
`

export default Skills

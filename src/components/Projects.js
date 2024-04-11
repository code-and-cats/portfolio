import React from 'react'
import projectList from '../assets/projectList'
import { styled } from 'styled-components'

const Projects = () => {
  return (
    <FeaturedSection>
      <StyledH2>Featured code projects</StyledH2>
      {projectList.map((project) => {
        return (
          <FeaturedWrapper>
            <StyledArticle>
              <ArticleImgWrapper>
                <ArticleImg src={project.img} alt="{project.alt}" />
              </ArticleImgWrapper>
              <ArticleTextWrapper>
                <StyledH3>{project.name}</StyledH3>
                <p>{project.description}</p>
              </ArticleTextWrapper>
              <TagWrapper>
                {project.tags.map((tag) => (
                  <Tags key={tag}>{tag}</Tags>
                ))}
              </TagWrapper>
              <ProjectsLinksWrapper>
                <form action={project.demo} method="get" target="_blank">
                  <Button type="submit" $demo>
                    <Icon src="../img/Live-demo.svg" alt="" />
                    Live demo
                  </Button>
                </form>
                <form action={project.code} method="get" target="_blank">
                  <Button type="submit">
                    <Icon src="../img/github-bl.svg" alt="" />
                    View the code
                  </Button>
                </form>
              </ProjectsLinksWrapper>
            </StyledArticle>
          </FeaturedWrapper>
        )
      })}
    </FeaturedSection>
  )
}

const FeaturedSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 92px;
  padding-bottom: 85px;

  @media (min-width: 744px) and (max-width: 1279px) {
    padding-bottom: 120px;
    padding-top: 0;
  }

  @media (min-width: 1280px) {
    padding-bottom: 92px;
  }
`

const FeaturedWrapper = styled.div`
  width: 327px;
  margin: auto;

  @media (min-width: 744px) and (max-width: 1279px) {
    width: 708px;
  }

  @media (min-width: 1280px) {
    width: 820px;
    margin: auto;
  }
`

const StyledArticle = styled.article`
  margin-bottom: 80px;

  @media (min-width: 744px) {
    display: grid;
    grid-template-rows: repeat(4, 52px);
    gap: 24px;
  }

  @media (min-width: 1280px) {
    width: 820px;
    margin: auto;
    padding-bottom: 120px;
  }
`

const StyledH2 = styled.h2`
  font-size: 72px;
  text-align: left;
  margin: auto;
  margin-bottom: 76px;
  color: #1f596e;

  @media (min-width: 744px) {
    margin-bottom: 45px;
    margin-top: 100px;
  }
`

const StyledH3 = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 0.5em;

  @media (min-width: 744px) {
    margin-bottom: 12px;
    font-size: 32px;
  }
`

const ArticleImgWrapper = styled.div`
  @media (min-width: 744px) {
    grid-row: 1 / span 4;
  }
`

const ArticleImg = styled.img`
  @media (min-width: 1280px) {
    object-fit: cover;
    height: 280px;
    width: 280px;
  }
`

const ArticleTextWrapper = styled.div`
  margin-bottom: 22px;

  @media (min-width: 744px) {
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: span 2;
    margin-bottom: 0;
  }
`

const TagWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;

  @media (min-width: 744px) {
    grid-column-start: 2;
    align-self: center;
  }
`

const Tags = styled.span`
  background-color: black;
  padding: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 19px;
  color: white;
`

const ProjectsLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 744px) {
    grid-column-start: 2;
    flex-direction: row;
    margin-top: 0;
  }
`

const Button = styled.button`
  display: flex;
  text-decoration: none;
  align-items: center;
  gap: 4px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 18px;
  width: ${(props) => (props.$demo ? '164px' : '200px')};
  height: 48px;
  background: #f5f5f5;
  border-radius: 40px;
  border: 0px;

  &:hover {
    background: ${(props) => (props.$demo ? '#137565' : '#824c5b')};
    color: white;
  }
`

const Icon = styled.img`
  width: 48px;

  &:hover {
    filter: invert(100%);
  }
`

export default Projects

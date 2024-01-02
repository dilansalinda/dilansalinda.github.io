import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: #6E6E6E;

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Java (11+)','Groovy','Python','Spring Boot', 'Spring Security',
   'Spring MVC', 'Node.js','Anguler', 'Jenkins','AWS','MySQL','PostgreSQL','Docker','Apache Airflow',];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>

            <p>
              Hello! My name is Dilan and I enjoy creating things that live on the internet. My
              interest in software development started back in 2018.
            </p>
            {/* <p>
            During my tenure at Virtusa{' '}
            <a href="https://virtusa.com/" target="_blank" rel="noreferrer">
                Virtusa
              </a>, I spearheaded projects like 
              <a href="https://www.virtusa.com/news-room/Video-Hub/videos/611/6117142837001?utm_source=yext&utm_medium=onsite-search" target="_blank" rel="noreferrer">
              InsightLive SDLC | Virtusa’s intelligent engineering platform
              </a>{' '}
             and contributed to the development of Virtusa Data Migration Studio.
              My technical skills encompass Java, Python, Spring Boot,
               and proficiency in databases such as MySQL,
                PostgresSQL, RDS, and Cloud SQL.
            </p> */}

            <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://wegg.fr/">WEGG</a>,{' '} and {' '}
              <a href="https://www.virtusa.com/">Virtusa</a>. My
              main focus these days is building accessible, inclusive products and digital
              experiences at <a href="https://www.virtusa.com/">Virtusa</a> for a variety of
              clients.
            </p>

            <p>
            My expertise lies in   <a href="https://java.com/">Java</a>, <a href="https://spring.io/">Spring Framework</a>, and <a href="https://nodejs.org/en/about/">Node.js</a>, 
            with a passion for delivering efficient backend solutions. 
            Committed to advancing technology and fostering innovation, 
            I thrive in collaborative environments. 
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

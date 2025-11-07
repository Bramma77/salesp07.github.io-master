import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/logo1.png" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Brammadevan</strong>. I'm originally
              from Trichy. I have over <strong>3.5 years of experience</strong>{" "}
              as a React Native Developer, working on Android and iOS
              applications. My professional journey includes working with{" "}
              <strong>Transvelocity Logistics Pvt. Ltd</strong> for 1 year,
              <strong>Adaptive BizApp Systems</strong> for 4 months, and
              <strong>Riyadvi Software Technologies Pvt. Ltd</strong> for 2.1
              years. I have extensive experience in developing and maintaining
              cross-platform mobile applications with rich functionality and
              seamless performance.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My journey into the world of technology began with a passion for
              <strong>problem-solving</strong> and creating meaningful digital
              experiences. I pursued a{" "}
              <strong>Bachelor’s degree in Computer Science Engineering</strong>
              , where I built a strong foundation in programming and application
              development. During my studies, I worked on several exciting
              projects, including
              <strong>VisDoc</strong> — an online doctor appointment booking
              app,
              <strong>Laxmi Astro AI</strong> — an astrology consultation
              platform,
              <strong>Srivaari Builders</strong> — a material and manpower
              management app,
              <strong>Alldine</strong> — a food ordering app, and a
              <strong>Tile Estimation app</strong> used for measurement and cost
              estimation.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within teams toward shared goals has been
              one of the most rewarding aspects of my career. I enjoy
              translating ideas into scalable and efficient mobile solutions
              while ensuring an excellent user experience. I’m always eager to
              explore new technologies and continue growing in the field of{" "}
              <strong>web and cross-platform mobile development</strong>.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

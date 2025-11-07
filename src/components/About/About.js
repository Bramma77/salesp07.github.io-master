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
              from Trichy. I have <strong>3.6 years of experience</strong> as a
              React Native Developer, building and maintaining cross-platform
              mobile applications for both Android and iOS platforms. My
              professional journey includes working with
              <strong>Transvelocity Logistics Pvt. Ltd</strong> (1 year),
              <strong>Adaptive BizApp Systems</strong> (4 months), and
              <strong>Riyadvi Software Technologies Pvt. Ltd</strong> (2.1
              years). I’ve gained hands-on experience in developing scalable
              mobile solutions, integrating APIs, implementing real-time
              communication, and optimizing app performance.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My passion for technology and problem-solving led me to pursue a
              <strong>Bachelor’s degree in Computer Science Engineering</strong>
              . During my academic journey, I developed a strong interest in
              mobile and web development, which grew into a full-time career.
              Over the years, I’ve contributed to several exciting projects such
              as
              <strong>Pudoz</strong> (goods delivery operations app),
              <strong>Adaptive Pay</strong> (HR and attendance management
              system),
              <strong>Adaptive Warehouse</strong> (inventory and logistics
              management), and multiple in-house and client projects at Riyadvi
              Software Technologies.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I’ve also been part of diverse projects like
              <strong>VisDoc</strong> (doctor appointment scheduling app),
              <strong>Laxmi Astro AI</strong> (astrology consultation app),
              <strong>Srivaari Builders</strong> (material and manpower
              management app),
              <strong>Alldine</strong> (food ordering and delivery app), and the{" "}
              <strong>Tile Estimation App</strong> for measurement and cost
              calculations. Each project helped me strengthen my expertise in
              React Native, TypeScript, Redux, and API integrations.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Collaborating with cross-functional teams and solving complex
              problems has been one of the most fulfilling aspects of my career.
              I’m passionate about creating user-focused, high-performance
              mobile applications and constantly exploring new tools and
              frameworks to stay current with industry trends.
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

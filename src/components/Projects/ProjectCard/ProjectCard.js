import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
import "./ProjectCard.css";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          {/* <Card> */}
          <div className="card">
            <div className="cardLeft">
              <div style={{}}>
                <img
                  src={list.img}
                  alt={list.name}
                  style={{ borderRadius: 20 }}
                />
              </div>
              <div>
                <img
                  src={list.img1}
                  alt={list.name}
                  style={{ borderRadius: 20 }}
                />
              </div>
              <div>
                <img
                  src={list.img2}
                  alt={list.name}
                  style={{ borderRadius: 20 }}
                />
              </div>
              <div>
                <img
                  src={list.img3}
                  alt={list.name}
                  style={{ borderRadius: 20 }}
                />
              </div>
            </div>
            <div className="cardRight">
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>

              <BtnGroup>
                {/* <a className="btn SecondaryBtn btn-shadow">Play Store</a>
                <a className="btn PrimaryBtn btn-shadow">Demo ➜</a> */}
                {(list.title === "VisDoc" ||
                  list.title === "AllDine" ||
                  list.title === "Laxmi Astro Ai") && (
                  <a
                    className="btn1 SecondaryBtn1 btn-shadow"
                    href={list.github_url}
                  >
                    <img className="imgs" src="./play.png" />
                  </a>
                )}
                {list.title === "VisDoc" && (
                  <a
                    className="btn1 SecondaryBtn1 btn-shadow"
                    href={list.appstore_url}
                  >
                    <img className="imgs" src="./appstore.jpg" />
                  </a>
                )}

                {/* {list.github_url.length > 0 && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )} */}
                {/* {list.demo_url.length > 0 && (
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                )} */}
              </BtnGroup>
            </div>
          </div>
          {/* </Card> */}
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ProjectCard;

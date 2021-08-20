import React from 'react';
// Styles
import "./../../index.css";

import webdev from "../../assets/lottie/webdev.json";
import DisplayLottie from "../DisplayLottie/DisplayLottie";
// Images
import gatsbyImg from "./../../images/jamstack/gatsby.svg";
import graphqlImg from "./../../images/jamstack/graphql.svg";
import faunaImg from "./../../images/jamstack/fauna.png";
import contentfulImg from "./../../images/jamstack/contentful.svg";

import mongoImg from "./../../images/mern/mongo.png";
import expressImg from "./../../images/mern/expressjs.svg";
import reactImg from "./../../images/mern/react.svg";
import nodeImg from "./../../images/mern/node.svg";


import { skillsSection } from "../../projects";

const Services = () => {
  return (
    <section
      data-aos="zoom-in"
      className="services-container row"
      name="services"
      id="services"
    >
      <h1 className="heading">Services We Provide</h1>
      <p className="lead">{skillsSection.subTitle}</p>
      <div className="services-wrapper">
        <div className="servicesPic">
          <DisplayLottie animationData={webdev}/>
        </div>
        <div className="services">
          <li>
            {
              skillsSection.skills.map(skill => {
                return <h5 key={skill}>{skill}</h5>
              })
            }
          </li>
        </div>
      </div>
    </section>
  );
};

export default Services;

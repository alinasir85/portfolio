import React from 'react';
// Styles
import "./../../index.css";
import webdev from "../../assets/lottie/webdev.json";
import DisplayLottie from "../DisplayLottie/DisplayLottie";


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
      <h5>{skillsSection.subTitle}</h5>
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

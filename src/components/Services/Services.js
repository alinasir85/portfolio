import React from "react";

// Styles
import "./../../index.css";

// Images
import gatsbyImg from "./../../images/jamstack/gatsby.svg";
import graphqlImg from "./../../images/jamstack/graphql.svg";
import faunaImg from "./../../images/jamstack/fauna.png";
import contentfulImg from "./../../images/jamstack/contentful.svg";

import mongoImg from "./../../images/mern/mongo.png";
import expressImg from "./../../images/mern/expressjs.svg";
import reactImg from "./../../images/mern/react.svg";
import nodeImg from "./../../images/mern/node.svg";
import webdev from "../../assets/lottie/webdev.json";
import DisplayLottie from "../DisplayLottie/DisplayLottie";

const Services = () => {
  return (
    <section
      data-aos="zoom-in"
      className="services-container"
      name="services"
      id="services"
    >
      <h1 className="heading">Services We Provide</h1>
      <div className="services-wrapper">
        <div className="servicesPic">
            <DisplayLottie animationData={webdev} />
        </div>
        <div className="services">
          <li>
            <img src={gatsbyImg} alt="" style={{margin:'2%'}} />
            <img src={graphqlImg} alt="" style={{margin:'2%'}} />
            <img src={contentfulImg} alt="" style={{margin:'2%'}} />
            <br/>
            <img src={faunaImg} alt="" />
            <img src={expressImg} alt="" />
            <img src={reactImg} alt="" />
            <br/>
            <img src={nodeImg} alt=""  style={{margin:'2%'}}/>
            <img src={mongoImg} alt=""  style={{margin:'2%'}}/>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Services;

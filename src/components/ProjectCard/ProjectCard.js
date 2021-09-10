import {motion} from "framer-motion";
import React from "react";

const ProjectCard = (props) => {
    const boxVariants = {
        hover: {
            scale: 1.02,
            transition: {
                type: "spring",
            },
        },
    };
    return (
        <motion.div
            variants={boxVariants}
            whileHover="hover"
            className="projects"
        >
            <a
                rel="noopener noreferrer"
                target="_blank"
                href={props.storeLink}
            >
                <div className="project-images" id={props.storeName}></div>
            </a>

            <div className="project-links">
                <div>
                    <h4 style={{paddingTop:'3%'}}>{props.storeName}</h4>
                    <h6 style={{paddingBottom:'4%',paddingTop:'2%'}}>{props.desc}</h6>
                </div>
                <div className="icons">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={props.githubLink}
                    >
                        <i className="fab fa-github" title="github repo" id="github">
                            {" "}
                        </i>
                    </a>
                    <a
                        rel="noopener noreferrer"
                        href={props.storeLink}
                        target="_blank"
                    >
                        {" "}
                        <i
                            className="fas fa-external-link-alt"
                            title="live preview"
                            id="live"
                        ></i>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;
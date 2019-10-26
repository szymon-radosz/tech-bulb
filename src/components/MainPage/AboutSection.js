import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "gatsby";

const useStyles = makeStyles({
  descText: {
    ["@media (max-width:480px)"]: {
      margin: "0",
      padding: "25px 0",
      fontSize: "14px"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      margin: "0",
      padding: "35px 0",
      fontSize: "14px"
    },
    ["@media (min-width:768px)"]: {
      margin: "0",
      padding: "45px 0",
      fontSize: "16px"
    }
  },
  linkText: {
    color: "#333",
    fontWeight: "bold"
  }
});

const AboutSection = () => {
  const classes = useStyles();

  return (
    <div className="page-section__container">
      <div className="page-section-wrapper">
        <h2 className="page-section__header">About</h2>
        <div className="page-section__header--divider"></div>
        <p className={classes.descText}>
          I'm 24 years old Frontend developer currently living in Warsaw,
          Poland. I created tech-bulb.com to writing articles based on my new
          experience as a developer. There are a bunch of web development
          articles. You find all listed{" "}
          <Link className={classes.linkText} to="/blog">
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutSection;

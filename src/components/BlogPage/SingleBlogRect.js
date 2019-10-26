import React from "react";
import Img from "gatsby-image";
import moment from "moment";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  mainContainer: {
    width: "90%",
    backgroundColor: "#fff",
    boxShadow: "0px 5px 18px 1px rgba(240,240,240,1)",
    MozBoxShadow: "0px 5px 18px 1px rgba(240,240,240,1)",
    WebkitBoxShadow: "0px 5px 18px 1px rgba(240,240,240,1)",
    borderRadius: "15px",
    margin: "0 auto 30px auto",
    display: "flex"
  },
  imageContainer: {
    borderRadius: "15px 0 0 15px",
    height: "100%",
    ["@media (max-width:480px)"]: {
      minWidth: "120px"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      minWidth: "180px"
    },
    ["@media (min-width:768px)"]: {
      minWidth: "200px"
    }
  },
  textContainer: {
    padding: "15px 15px 18px 15px"
  },
  textTitle: {
    color: "#333",
    fontWeight: "600",
    MozBoxTransition: "all 0.3s ease-in-out",
    WebkitBoxShadow: "all 0.3s ease-in-out",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      opacity: "0.7"
    },
    ["@media (max-width:480px)"]: {
      minHeight: "14px",
      margin: "0",
      fontSize: "14px"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      minHeight: "14px",
      margin: "0",
      fontSize: "14px"
    },
    ["@media (min-width:768px)"]: {
      minHeight: "18px",
      margin: "0",
      fontSize: "16px"
    }
  },
  dateText: {
    fontWeight: "300",
    ["@media (max-width:480px)"]: {
      fontSize: "10px",
      margin: "12px 0 5px 0"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      fontSize: "10px",
      margin: "15px 0 5px 0"
    },
    ["@media (min-width:768px)"]: {
      fontSize: "12px",
      margin: "20px 0 10px 0"
    }
  },
  tagsContainer: {
    //display: "flex"
  },
  singleTag: {
    display: "inline-block",
    ["@media (max-width:480px)"]: {
      border: "1px solid #8DEBB4",
      margin: "10px 10px 0 0",
      padding: "8px 15px 7px 15px",
      borderRadius: "40px",
      fontSize: "10px",
      lineHeight: "0px"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      border: "1px solid #8DEBB4",
      margin: "10px 10px 0 0",
      padding: "8px 15px",
      borderRadius: "40px",
      fontSize: "12px",
      lineHeight: "0px"
    },
    ["@media (min-width:768px)"]: {
      border: "2px solid #8DEBB4",
      margin: "10px 15px 0 0",
      padding: "12px 20px",
      borderRadius: "40px",
      fontSize: "14px",
      lineHeight: "0px"
    }
  }
});

const SingleBlogRect = ({ title, date, tags, image, path }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <a href={path}>
        <Img fluid={image} className={classes.imageContainer} />
      </a>
      <div className={classes.textContainer}>
        <a href={path}>
          <p className={classes.textTitle}>{title}</p>
        </a>
        <p className={classes.dateText}>
          Created at {moment(date).format("Do MMM, YYYY")}
        </p>
        <div className={classes.tagsContainer}>
          {tags &&
            tags.length > 0 &&
            tags.map((tag, i) => {
              return <p className={classes.singleTag}>{tag.value}</p>;
            })}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogRect;

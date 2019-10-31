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
    margin: "0 auto"
  },
  imageContainer: {
    borderRadius: "15px 15px 0 0"
  },
  textContainer: {
    padding: "15px 15px 18px 15px"
  },
  textTitle: {
    margin: "0",
    color: "#333",
    fontWeight: "600",
    minHeight: "58px",
    MozBoxTransition: "all 0.3s ease-in-out",
    WebkitBoxShadow: "all 0.3s ease-in-out",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      opacity: "0.7"
    }
  },
  dateText: {
    fontSize: "12px",
    fontWeight: "300",
    margin: "20px 0 10px 0"
  },
  tagsContainer: {
    //display: "flex"
  },
  singleTag: {
    display: "inline-block",
    border: "2px solid #8DEBB4",
    margin: "10px 15px 0 0",
    padding: "12px 20px",
    borderRadius: "40px",
    fontSize: "14px",
    lineHeight: "0px"
  }
});

const BlogPostRect = ({ title, date, tags, image, path }) => {
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
              return (
                <p key={`tag-rect-${i}`} className={classes.singleTag}>
                  {tag.value}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogPostRect;

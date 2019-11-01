import React from "react";
import Slider from "react-slick";
import BlogPostRect from "./BlogPostRect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  mainContainer: {
    ["@media (max-width:480px)"]: {
      width: "100%",
      margin: "0 auto",
      "& button": {
        display: "none !important"
      },
      padding: "45px 0 0 0"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      width: "90%",
      margin: "0 auto",
      padding: "45px 0"
    },
    ["@media (min-width:768px)"]: {
      width: "95%",
      margin: "0 auto",
      padding: "45px 0"
    }
  }
});

const BlogPostsCarousel = ({ blogPostsList }) => {
  const classes = useStyles();

  const sliderOptions = {
    dots: false,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  return (
    <Slider {...sliderOptions} className={classes.mainContainer}>
      {blogPostsList &&
        blogPostsList.map((post, i) => {
          return (
            <BlogPostRect
              key={`blog-post-${i}`}
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              tags={post.node.frontmatter.tags}
              postDir={post.node.frontmatter.postDir}
              image={post.node.frontmatter.image.childImageSharp.fluid}
              path={post.node.frontmatter.path}
            />
          );
        })}
    </Slider>
  );
};

export default BlogPostsCarousel;

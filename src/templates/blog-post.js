import React from "react";
import { graphql } from "gatsby";
import Layout from "./../components/Layout";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  blogPostContent: {
    width: "90%",
    margin: "0 auto",
    color: "#333"
  },
  blogPostContentText: {
    fontWeight: "600",
    ["@media (max-width:480px)"]: {
      fontSize: "20px",
      padding: "20px 0"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      fontSize: "22px",
      padding: "25px 0"
    },
    ["@media (min-width:768px)"]: {
      fontSize: "28px",
      padding: "30px 0"
    }
  },
  blogPostContentDate: {
    fontWeight: "300",
    borderBottom: "1px solid #8debb4",
    ["@media (max-width:480px)"]: {
      fontSize: "12px",
      paddingBottom: "15px"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      fontSize: "14px",
      paddingBottom: "15px"
    },
    ["@media (min-width:768px)"]: {
      fontSize: "14px",
      paddingBottom: "23px"
    }
  },
  codeContainer: {
    ["@media (max-width:480px)"]: {
      paddingBottom: "20px"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      paddingBottom: "30px"
    },
    ["@media (min-width:768px)"]: {
      paddingBottom: "50px"
    }
  }
});

export default function Template({ data }) {
  const post = data.markdownRemark;
  const classes = useStyles();

  return (
    <Layout>
      <div className="paddingTopContainer">
        <div className={classes.blogPostContent}>
          <h1 className={classes.blogPostContentText}>
            {post.frontmatter.title}
          </h1>
          <p className={classes.blogPostContentDate}>
            Posted by {post.frontmatter.author} on {post.frontmatter.date}
          </p>

          <div
            className={classes.codeContainer}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`;

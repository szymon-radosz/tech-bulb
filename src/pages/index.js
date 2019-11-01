import React from "react";
import Layout from "./../components/Layout";
import MainSection from "./../components/MainPage/MainSection";
import BlogSection from "./../components/MainPage/BlogSection";
import AboutSection from "./../components/MainPage/AboutSection";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => (
  <Layout>
    <MainSection />
    <BlogSection data={data.allMarkdownRemark.edges} />
    <AboutSection />
  </Layout>
);

export const pageQuery = graphql`
  query BlogPostsIndex {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            tags {
              key
              value
              identifier
            }
            postDir
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

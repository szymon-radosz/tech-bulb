import React from "react";
import Link from "gatsby-link";
import Layout from "./../components/Layout";
import SingleBlogRect from "./../components/BlogPage/SingleBlogRect";

const BlogPage = ({ data }) => (
  <Layout>
    <div className="paddingTopContainer">
      <h1 className="pageTitle">Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(
        (post, i) => {
          return (
            <SingleBlogRect
              key={post.node.id}
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              tags={post.node.frontmatter.tags}
              image={post.node.frontmatter.image.childImageSharp.fluid}
              path={post.node.frontmatter.path}
            />
          );
        }

        /*<SingleBlogRect
          key={post.node.id}
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          tags={post.node.frontmatter.tags}
          image={post.node.frontmatter.image.childImageSharp.fluid}
          path={post.node.frontmatter.path}
        />*/
      )}
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
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

export default BlogPage;
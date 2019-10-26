import React from "react";
import BlogPostsCarousel from "./../BlogPostsCarousel";
import "./../../styles/global.css";

const BlogSection = ({ data }) => {
  return (
    <div
      className="page-section__container page-section__container--blog"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className="page-section-wrapper">
        <h2 className="page-section__header">Blog</h2>
        <div className="page-section__header--divider"></div>
        <BlogPostsCarousel blogPostsList={data} />
      </div>
    </div>
  );
};

export default BlogSection;

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import favicon from "./../images/utils/favicon.ico";
import { StaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import Menu from "../components/menu";
//import "./index.css";

export default ({ children }) => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      return (
        <div className="app-wrapper">
          <Helmet
            title={data.site.siteMetadata.title}
            titleTemplate="%s | tech-bulb.com"
            meta={[
              {
                name: "description",
                content:
                  "Tech blog focused on web development. Watch articles about React.js, Laravel and so on."
              },
              {
                name: "keywords",
                content:
                  "web development, frontend, React.js, Laravel, React Native, Javascript"
              }
            ]}
          >
            <html lang="en" amp />
            <meta charSet="utf-8" />
            <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
            <link
              href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,500i,600,700,800,900&display=swap"
              rel="stylesheet"
            />
          </Helmet>

          <Header siteTitle={data.site.siteMetadata.title} />
          <Menu />
          <div
            style={{
              margin: "0 auto",
              maxWidth: 960,
              padding: "0px 1.0875rem 1.45rem",
              paddingTop: 0
            }}
          >
            {children}
          </div>
        </div>
      );
    }}
  />
);

export const detailsQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

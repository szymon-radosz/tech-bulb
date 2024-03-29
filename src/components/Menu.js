import React from "react";
import Link from "gatsby-link";
import { StaticQuery, graphql } from "gatsby";

const Menu = () => (
  <StaticQuery
    query={detailsMenuQuery}
    render={data => {
      return (
        <div
          style={{
            background: "#fff",
            paddingTop: "10px"
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-evenly"
            }}
          >
            {data.site.siteMetadata.menuLinks.map((element, i) => {
              return (
                <li key={`menu-link-${i}`}>
                  <Link to={element.link}>{element.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }}
  />
);

export default Menu;

export const detailsMenuQuery = graphql`
  query menuQuery {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`;

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import logo from "./../images/utils/tech-bulb-logo.svg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#fff !important",
    boxShadow: "rgb(194, 194, 194) 0px 1px 8px -5px",
    MozBoxShadow: "rgb(194, 194, 194) 0px 1px 8px -5px",
    WebkitBoxShadow: "rgb(194, 194, 194) 0px 1px 8px -5px"
  },
  logoContainer: {
    color: "white",
    textDecoration: "none"
  },
  logoContainerImage: {
    ["@media (max-width:480px)"]: {
      maxWidth: "140px"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      maxWidth: "160px"
    },
    ["@media (min-width:768px)"]: {
      maxWidth: "170px"
    }
  },
  pageOptionContainer: {
    color: "white",
    textDecoration: "none"
  },
  pageOptionText: {
    color: "#333",
    fontWeight: "300",
    ["@media (max-width:480px)"]: {
      fontSize: "14px",
      marginLeft: "15px"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      fontSize: "14px",
      marginLeft: "15px"
    },
    ["@media (min-width:768px)"]: {
      fontSize: "16px",
      marginLeft: "25px"
    }
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar id="appBar" className={classes.navbar}>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Grid container alignItems="center">
              <Link to="/" className={classes.logoContainer}>
                <img className={classes.logoContainerImage} src={logo} />
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Link to="/blog" className={classes.pageOptionContainer}>
              <p className={classes.pageOptionText}>Blog</p>
            </Link>
          </Grid>
        </Grid>
        <Grid item />
      </Toolbar>
    </AppBar>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            contact {
              email
            }
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
);

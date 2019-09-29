import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import logo from "./../images/utils/tech-bulb-logo.svg";

const Header = props => {
  return (
    <AppBar id="appBar">
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          spacing={16}
        >
          <Grid item>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              <img
                style={{
                  maxWidth: "170px"
                }}
                src={logo}
              />
            </Link>
          </Grid>
          <Grid item>
            <Hidden smDown>
              <Typography component="span" variant="caption">
                <Menu />
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <MenuMobile />
            </Hidden>
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

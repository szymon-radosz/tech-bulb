import React from "react";
import Grid from "@material-ui/core/Grid";
import twitter from "./../images/utils/twitter.png";
import github from "./../images/utils/github.png";
import { makeStyles, StylesProvider } from "@material-ui/styles";

const useStyles = makeStyles({
  footerContainer: {
    width: "100%",
    backgroundColor: "rgb(247, 247, 247)",
    padding: "10px 20px"
  },
  footerWrapper: {
    width: "100%",
    margin: "0 auto"
  },
  footerTitle: {
    ["@media (max-width:480px)"]: {
      fontSize: "10px"
    },
    ["@media (min-width:481px)"]: {
      fontSize: "12px"
    }
  },
  socialOptionContainer: {
    color: "white",
    textDecoration: "none",

    "&:first-child": {
      marginRight: "20px"
    }
  },
  socialOptionImage: {
    maxWidth: "20px"
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.footerContainer}>
      <Grid
        container
        justify="space-between"
        className={classes.footerWrapper}
        alignItems="center"
      >
        <Grid item>
          <p className={classes.footerTitle}>
            @2019 tech-bulb.com. All rights reserved.
          </p>
        </Grid>

        <Grid item>
          <a
            href="https://twitter.com/s_radosz"
            target="_blank"
            className={classes.socialOptionContainer}
          >
            <img className={classes.socialOptionImage} src={twitter} />
          </a>
          <a
            href="https://github.com/s-radosz"
            target="_blank"
            className={classes.socialOption}
          >
            <img className={classes.socialOptionImage} src={github} />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Footer;

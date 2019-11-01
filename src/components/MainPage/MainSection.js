import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import meImg from "./../../images/utils/me.svg";
import clap from "./../../images/utils/clap.png";

const useStyles = makeStyles({
  mainContainer: {
    width: "90%",
    margin: "0 auto",
    ["@media (max-width:480px)"]: {
      display: "block",
      marginTop: "90px"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      //marginTop: "10vh",
      minHeight: "50vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    ["@media (min-width:768px)"]: {
      marginTop: "65px",
      maxWidth: "960px",
      minHeight: "80vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  },
  mainContainerTextWrapper: {
    ["@media (max-width:480px)"]: {
      textAlign: "center"
    }
  },
  mainContainerHeader: {
    color: "#333",
    ["@media (max-width:480px)"]: {
      fontSize: "24px",
      margin: "0 0 10px 0"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      fontSize: "26px",
      margin: "0 0 15px 0"
    },
    ["@media (min-width:768px)"]: {
      fontSize: "32px",
      margin: "0 0 20px 0"
    }
  },
  mainContainerSubHeader: {
    color: "#333",
    ["@media (max-width:480px)"]: {
      fontSize: "18px",
      lineHeight: "22px",
      margin: "0 0 10px 0"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      fontSize: "20px",
      lineHeight: "22px",
      margin: "0 0 15px 0"
    },
    ["@media (min-width:768px)"]: {
      fontSize: "24px",
      lineHeight: "28px",
      margin: "0 0 20px 0"
    }
  },
  mainContainerParagraph: {
    color: "#333",
    ["@media (max-width:480px)"]: {
      fontSize: "14px",
      margin: "0"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      fontSize: "14px",
      margin: "0"
    },
    ["@media (min-width:768px)"]: {
      fontSize: "16px",
      margin: "0"
    }
  },
  meImageContainer: {
    position: "relative",
    ["@media (max-width:480px)"]: {
      maxWidth: "250px",
      width: "75vw",
      margin: "0 auto"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      maxWidth: "300px",
      width: "35vw",
      margin: "0 auto"
    },
    ["@media (min-width:768px)"]: {
      maxWidth: "500px",
      width: "38vw"
    }
  },
  meImage: {
    width: "100%",
    ["@media (max-width:480px)"]: {
      marginTop: "50px"
    },
    ["@media (min-width:768px)"]: {
      marginTop: "50px"
    }
  },
  clapImg: {
    position: "absolute",
    ["@media (max-width:480px)"]: {
      width: "14%",
      top: "46%"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      width: "14%",
      top: "32%"
    },
    ["@media (min-width:768px)"]: {
      width: "14%",
      top: "42%"
    }
  },
  hiddenRect: {
    cursor: "grab",
    position: "absolute",
    ["@media (max-width:480px)"]: {
      width: "70px",
      height: "70px",
      left: 0,
      top: "45%"
    },
    ["@media (min-width:481px) and (max-width:767px)"]: {
      width: "70px",
      height: "70px",
      left: 0,
      top: "27%"
    },
    ["@media (min-width:768px)"]: {
      width: "100px",
      height: "100px",
      left: 0,
      top: "40%"
    }
  }
});

const MainSection = () => {
  const classes = useStyles();

  const [showClap, setShowClap] = useState(false);
  const [countClaps, setCountClaps] = useState(0);

  const showClapElements = () => {
    //setShowClap(true);
    //alert("test");

    setShowClap(true);
    setCountClaps(countClaps + 1);

    setTimeout(() => {
      setShowClap(false);
    }, 700);
  };

  return (
    <Grid
      container
      className={classes.mainContainer}
      direction="row"
      justify="space-between"
    >
      <Grid item className={classes.mainContainerTextWrapper}>
        <h1 className={classes.mainContainerHeader}>Hi, I'm Simon.</h1>
        <h2 className={classes.mainContainerSubHeader}>
          Frontend developer <br />
          based on Warsaw, Poland.
        </h2>
        <p className={classes.mainContainerParagraph}>
          {countClaps === 0 && `Give me high five and continue.`}
          {countClaps === 1 && `Thank you mate.`}
          {countClaps > 1 && countClaps < 5 && `I really need that hand.`}
          {countClaps >= 5 && `I think I almost lost my hand.`}
        </p>
      </Grid>
      <Grid item className={classes.meImageContainer}>
        {showClap && <img src={clap} className={classes.clapImg} />}
        <div
          className={classes.hiddenRect}
          onClick={() => showClapElements()}
        ></div>

        <img src={meImg} className={classes.meImage} />
      </Grid>
    </Grid>
  );
};

export default MainSection;

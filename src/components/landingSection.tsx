import * as React from 'react';
import {createUseStyles} from "react-jss";

import * as colors from "../constants/colorScheme.json";
import * as fontFamilies from "../constants/fontFamily.json";

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  header: {
    width: 200,
    margin: '0 75px',
    display: 'flex',
    flexDirection: 'column',
    '& h1': {
      fontFamily: fontFamilies.header,
      color: colors.white,
      fontWeight: 600,
      fontSize: 48,
      textAlign: 'right',
      textTransform: 'uppercase',
    },
    '& span': {
      color: colors.white,
      fontSize: 24,
      fontFamily: fontFamilies.monospace,
      textAlign: 'right',
    }
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
  },
  mainpicture: {
    flex: 1,
  },
  heroText: {
    fontFamily: fontFamilies.title,
    fontSize: 36,
    lineHeight: '44px',
    color: colors.white,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '65px',
  },
  subtitle: {
    backgroundColor: colors.white,
    padding: '65px',
    fontSize: '24px',
    lineHeight: '29px',
  }
});

function LandingSection() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <header className={classes.header}>
        <div className={classes.mainpicture}/>
        <h1>Shreya Dahal</h1>
        <span>@squgeim</span>
      </header>
      <div className={classes.main}>
        <p className={classes.heroText}>
          a full-stack software engineer<br/> and open-source software enthusiast.
        </p>
        <p className={classes.subtitle}>
          I develop highly-scalable web applications and browser extensions trusted
          by thousands of users and have led teams to deliver world-class software service.
        </p>
      </div>
    </section>
  );
}

export default LandingSection;
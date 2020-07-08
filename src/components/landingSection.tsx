import * as React from 'react';
import {createUseStyles} from "react-jss";

import mainPicture from '../images/shreyadahal.jpg';

import * as colors from "../constants/colorScheme.json";
import * as fontFamilies from "../constants/fontFamily.json";

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 150,
    height: '100vh',
  },
  header: {
    width: 325,
    marginRight: '75px',
    display: 'flex',
    flexDirection: 'column',
    '&>*': {
      marginBottom: 25,
    },
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
      marginBottom: 50,
    }
  },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  mainpicture: {
    flex: 1,
    backgroundImage: `url(${mainPicture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
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
    '& p': {
      fontSize: '24px',
      lineHeight: '29px',
      width: '65%',
    }
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
        <div className={classes.subtitle}>
          <p>
            I develop highly-scalable web applications and browser extensions trusted
            by thousands of users and have led teams to deliver world-class software service.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
import * as React from 'react';
import { createUseStyles } from "react-jss"
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMailOpenLine,
  RiStackOverflowLine,
  RiUserLocationLine,
} from 'react-icons/ri';

import * as colors from "../constants/colorScheme.json";
import * as fonts from "../constants/fontFamily.json";

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    marginTop: '250px',
    height: '280px',
    background: colors.white,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    fontSize: '14px',
  },
  links: {
    flex: 1,
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    '& li': {
      marginRight: '100px',
      '& svg': {
        width: 16,
        height: 16,
        marginRight: 5,
      },
      '& a': {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
      }
    },
    '& li:last-of-type': {
      marginRight: '0px',
    }
  },
  copy: {
    position: 'absolute',
    bottom: '30px',
    color: 'rgba(0, 0, 0, 0.5)',
  },
});

function FooterSection() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <ul className={classes.links}>
        <li><RiUserLocationLine/> canada</li>
        <li><a href="mailto:shreyadahal@gmail.com"><RiMailOpenLine/> shreyadahal@gmail.com</a></li>
        <li><a href="https://github.com/squgeim"><RiGithubLine/> github</a></li>
        <li><a href="https://www.linkedin.com/in/squgeim/"><RiLinkedinBoxLine/> linkedin</a></li>
        <li><a href="https://stackoverflow.com/users/1654226/squgeim?tab=profile"><RiStackOverflowLine/> stack overflow</a></li>
      </ul>
      <span className={classes.copy}>
        &copy; Shreya Dahal, MMXX. All rights reserved.
      </span>
    </section>
  );
}

export default FooterSection;

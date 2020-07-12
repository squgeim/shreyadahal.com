import * as React from 'react';
import { createUseStyles } from "react-jss"

import * as colors from "../constants/colorScheme.json";
import * as fonts from "../constants/fontFamily.json";

const useStyles = createUseStyles({
  root: {
    position: 'relative',
    color: colors.white,
    textAlign: 'right',
    fontFamily: fonts.monospace,
    pointerEvents: 'none',
  },
  date: {
    position: 'absolute',
    bottom: '0px',
    right: '50px',
    fontSize: 215,
    fontWeight: 'bold',
    letterSpacing: '-0.3em',
    color: '#C9C4C9',
  },
  month: {
    right: 0,
    bottom: '0px',
    position: 'absolute',
    display: 'inline-block',
  },
});

interface IPublishedDateProps {
  publisedDate: string;
}

function PublishedDate(props: IPublishedDateProps) {
  const classes = useStyles();
  const { publisedDate } = props;

  const date = new Date(publisedDate);

  return (
    <div className={classes.root}>
      <span className={classes.date}>{date.getDate()}</span>
      <span className={classes.month}>
        {getMonthString(date.getMonth())}<br />
        {date.getFullYear()}
      </span>
    </div>
  );
}

function getMonthString(month: number) {
  try {
    return [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec',
    ][month];
  } catch (err) {
    if (err instanceof RangeError) {
      return '';
    }
  }
}

export default PublishedDate;

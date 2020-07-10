import * as React from "react"
import { createUseStyles } from "react-jss"

import * as colors from "../constants/colorScheme.json";
import * as fonts from "../constants/fontFamily.json";

import PublishedDate from "./publishedDate";

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '400px',
    transition: '100ms',
    '&:hover': {
      translate: '-20px -20px',
    },
  },
  card: {
    flex: 1,
    position: 'relative',
    background: colors.white,
    '&:hover': {
      boxShadow: `rgba(206, 143, 143, 0.5) 10px 10px`,
    },
    '& a': {
      padding: '65px',
      textDecoration: 'none',
      color: 'inherit',
      display: 'block',
    },
    '& h1': {
      fontFamily: fonts.header,
      fontSize: '36px',
      lineHeight: '24px',
      color: colors.background,
      marginBottom: '54px',
    },
    '& p': {
      fontSize: '18px',
      lineHeight: '22px',
      width: '700px',
    }
  }
});

interface IBlogCardProps {
  blog: {
    title: string;
    publishedDate: string;
    url: string;
    blurb: string;
    type: string
  };
}

function BlogCard(props: IBlogCardProps) {
  const classes = useStyles();
  const { blog } = props;

  return (
    <section className={classes.root}>
      <PublishedDate publisedDate={blog.publishedDate} />
      <div className={classes.card}>
        <a href={blog.url}>
          <h1>{blog.title}</h1>
          <p>{blog.blurb}</p>
        </a>
      </div>
    </section>
  );
}

export default BlogCard;

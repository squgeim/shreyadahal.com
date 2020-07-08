import * as React from "react"
import { createUseStyles } from "react-jss"

import * as colors from "../constants/colorScheme.json";
import * as fonts from "../constants/fontFamily.json";

const useStyles = createUseStyles({
  root: {
    marginLeft: '400px',
    marginBottom: '100px',
    background: colors.white,
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
      <a href={blog.url}>
        <h1>{blog.title}</h1>
        <p>{blog.blurb}</p>
        <div>{blog.publishedDate}</div>
      </a>
    </section>
  )
}

export default BlogCard;
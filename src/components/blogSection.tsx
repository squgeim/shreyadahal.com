import * as React from 'react';
import { useEffect, useState } from "react"
import BlogCard from "./blogCard"

function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://squgeim.github.io/content/blog.json')
      .then(response => response.json())
      .then(blogs => {
        setBlogs(blogs);
      })
      .catch(err => {
        console.error(err);
      });
  })

  return blogs;
}

function BlogSection() {
  const blogs = useBlogs();

  return (
    blogs.map(blog => <BlogCard blog={blog} />)
  );
}

export default BlogSection;

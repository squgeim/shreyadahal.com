import React from "react";
import SEO from "../components/seo"
import { Link } from "gatsby";

import 'reset-css/reset.css';
import '../styles/style.css';

import LandingSection from "../components/landingSection"
import BlogSection from "../components/blogSection"
import FooterSection from "../components/footerSection"

const IndexPage = () => {
  return (
    <>
      <SEO description={"Shreya Dahal's personal blog and portfolio."} lang="en-US" title={"Shreya Dahal's Blog"} />
      <LandingSection />
      <BlogSection />
      <FooterSection />
    </>
  )
};

export default IndexPage;

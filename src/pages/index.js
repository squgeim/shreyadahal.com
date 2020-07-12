import React from "react";
import SEO from "../components/seo";

import "reset-css/reset.css";
import "../styles/style.css";

import LandingSection from "../components/landingSection";
import BlogSection from "../components/blogSection";
import FooterSection from "../components/footerSection";

const IndexPage = () => {
  return (
    <>
      <SEO lang="en-US" title={"Blog"} />
      <LandingSection />
      <BlogSection />
      <FooterSection />
    </>
  );
};

export default IndexPage;

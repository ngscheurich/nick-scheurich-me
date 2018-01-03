import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import avatar from "../images/avatar.png";
const title = "The Personal Website of Mr. Nicholas Gunther Scheurich";
const description = `Scholar of arcane mysteries such as computer programming,
   game design, and the Vim text editor.`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: "description", content: { description } },
        { name: "og:url", content: `https://www.ngscheurich.com/` },
        { name: "og:title", content: title },
        { name: "og:description", content: description },
        { name: "og:image", content: avatar }
      ]}
    />

    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

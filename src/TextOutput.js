import React from "react";
const marked = require("marked");
marked.setOptions({
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

const TextOutput = ({ input }) => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked(input) }}
      className="box right"
    />
  );
};

export default TextOutput;

import React from "react";

const TextInput = ({ value, handleInput }) => {
  return (
    <textarea
      name="input"
      cols="30"
      id="editor"
      rows="5"
      value={value}
      onChange={handleInput}
      className="box left"
    ></textarea>
  );
};

export default TextInput;

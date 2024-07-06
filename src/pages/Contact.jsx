import React from "react";
import { useParams } from "react-router-dom";

const Contact = ({ options }) => {
  const { name } = useParams();
  const { bgColor, text, height } = options;

  return (
    <div style={{backgroundColor: bgColor, height: `${height}lvh`, minWidth: 'max-content', width: '50lvw', color: '#222e'}}>
        <h3>{text} of </h3><h1>{name || 'Nobody selected'}</h1>
    </div>
  );
};

export default Contact;

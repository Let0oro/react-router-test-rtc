import React from "react";

const About = ({options}) => {
  const {bgColor, text, height} = options

  return (
    <div style={{backgroundColor: bgColor, height: `${height}lvh`, width: '50lvw', color: '#222e'}}>
      <h3>{text}</h3>
    </div>
  );
};

export default About;

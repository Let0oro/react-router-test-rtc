import React from "react";

const Home = ({ options }) => {
  const { bgColor, text, height } = options;
  return (
    <div  style={{backgroundColor: bgColor, height: `${height}lvh`, width: '50lvw', minWidth: 'max-content', color: '#222e'}}>
      <h3>{text}</h3>
    </div>
  );
};

export default Home;

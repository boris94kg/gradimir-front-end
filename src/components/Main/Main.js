import React from "react";

const myStyle = {
  position: "relative",
  paddingBottom: "60px",
};

const Main = (props) => {
  return <div style={myStyle}>{props.children}</div>;
};

export default Main;

import React from "react";

const MainSection = (props) => {
  return <section style={{backgroundColor: '#FCFCFC'}} className="overflow-hidden bg-gray-100">{props.children}</section>;
};

export default MainSection;

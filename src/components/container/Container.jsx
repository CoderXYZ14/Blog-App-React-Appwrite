import React from "react";

//for outer container
//generally for styling property
function Container({ children }) {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
}

export default Container;

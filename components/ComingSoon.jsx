import React from "react";

function ComingSoon({ children }) {
  return (
    <span className="flex text-primary text-2xl md:text-4xl lg:text-6xl ">
      {children} Coming Soon
    </span>
  );
}

export default ComingSoon;

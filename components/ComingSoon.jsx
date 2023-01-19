import React from "react";

function ComingSoon({ children }) {
  return (
    <span className="flex text-blue-500 text-6xl">
      {children} Coming S
      <div className="w-9 h-9 border-4 border-dashed rounded-full animate-spin mt-5 border-blue-400"></div>
      <div className="w-9 h-9 border-4 border-dashed rounded-full animate-spin mt-5 border-blue-400"></div>
      n
    </span>
  );
}

export default ComingSoon;

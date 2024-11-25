import React from "react";

const Result = ({ result }) => {
  return (
    <div className="border-orange">
      <h3>Result</h3>
      <p className="result">{result}</p>
    </div>
  );
};

export default Result;

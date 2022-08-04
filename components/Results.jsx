import React from "react";

export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <h3 key={result.title}>{result.title}</h3>
      ))}
    </div>
  );
}

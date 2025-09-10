import React from "react";

export function PageHeading({ children }) {
  return (
    <h1 className="text-5xl mb-5 text-accent-400 font-medium">{children}</h1>
  );
}

export function SectionHeading({ children }) {
  return (
    <h1 className="text-xl mb-3 text-accent-400 font-medium">{children}</h1>
  );
}

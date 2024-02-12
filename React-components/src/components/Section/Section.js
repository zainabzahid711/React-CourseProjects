import React from "react";

function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
}

export default Section;

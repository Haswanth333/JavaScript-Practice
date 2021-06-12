import React from "react";

function Greet({ firstname, lastname, children }) {
  return (
    <div>
      <h1>
        Hello {firstname} {lastname}
      </h1>
      {children}
    </div>
  );
}

export default Greet;

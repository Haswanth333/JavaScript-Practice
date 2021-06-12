import React from "react";

function Greet(props) {
  return (
    <div>
      <h1>
        Hello {props.firstname} {props.lastname}
      </h1>
      {props.children}
    </div>
  );
}

export default Greet;
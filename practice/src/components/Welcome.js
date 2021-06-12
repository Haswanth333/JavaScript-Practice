import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    const { firstname, lastname, children } = this.props;
    return (
      <div>
        <h1>
          HI {firstname} {lastname}
        </h1>
        {children}
      </div>
    );
  }
}

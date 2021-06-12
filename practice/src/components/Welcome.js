import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>
          HI {this.props.firstname} {this.props.lastname}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

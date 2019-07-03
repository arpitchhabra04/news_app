import React, { Component } from "react";
import waterfall from "waterfall.js/src/waterfall";

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderName = this.renderName.bind(this);
  }
  renderName() {
    waterfall(".grid");
  }
  render() {
    return (
      <div className="grid">
        {this.renderName}
        <div className="item">arpit</div>
        <div className="item">arpit</div>
        <div className="item">arpit</div>
        <div className="item">arpit</div>
      </div>
    );
  }
}

export default Check;

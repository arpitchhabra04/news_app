import React, { Component } from "react";
import waterfall from "waterfall.js/src/waterfall";

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.renderName = this.renderName.bind(this);
  }

  componentDidMount() {
    var grid = document.querySelector("my-grid");
    waterfall(grid);
  }

  render() {
    return (
      <div className="my-grid">
        <div className="item">arpit</div>
        <div className="item">arpit</div>
        <div className="item">arpit</div>
        <div className="item">arpit</div>
      </div>
    );
  }
}

export default Check;

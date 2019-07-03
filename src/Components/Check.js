import React, { Component } from "react";
import ReactDOM from "react-dom";
import IntersectionVisible from "react-intersection-visible";

class Check extends Component {
  onHide(entries) {
    return (
      <div>
        <h1>this is initial</h1>
      </div>
    );
  }

  onShow(entries) {
    return (
      <div>
        <h1>this is second</h1>
      </div>
    );
  }

  onIntersect(entries) {
    return (
      <div>
        <h1>this is third</h1>
      </div>
    );
  }

  render() {
    return (
      <IntersectionVisible
        onIntersect={e => this.onIntersect(e)}
        onHide={e => this.onHide(e)}
        onShow={e => this.onShow(e)}
      >
        <div>
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah
        </div>
      </IntersectionVisible>
    );
  }
}
export default Check;

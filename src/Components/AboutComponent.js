import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="colorStyle">
        <div>
          <h1 className="AboutUs">About Us</h1>
          <hr width="300" />
          <h1 className="Allign">Our Story</h1>
          <div className="container Content">
            Sed lobortis sodales velit, a posuere nulla lacinia at. Mauris
            cursus eget tellus quis interdum. Fusce in laoreet erat. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Donec accumsan, libero nec ultrices cursus,
            ligula neque condimentum nunc, a sodales mauris nisi id est. Nam
            commodo, purus ut porta malesuada, ex sapien fringilla dolor, id
            sollicitudin augue felis non massa. Donec vel blandit est.
          </div>
        </div>
      </div>
    );
  }
}

export default About;

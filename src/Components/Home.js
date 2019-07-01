import React, { Component } from "react";
import axios from "axios";
import { Media } from "reactstrap";
class Starter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/sources?apiKey=b4095000fa984a889c24d0c02b886820"
      )
      .then(response => {
        console.log(response);
        this.setState({
          channels: response.data.sources
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.handleChannel = this.handleChannel.bind(this);
  }
  handleChannel(id) {
    console.log(id);
  }
  render() {
    return (
      <div className="container">
        <h2> News Channels</h2>

        {this.state.channels.length
          ? this.state.channels.map(channel => (
              <Media key={channel.id}>
                <Media left>
                  <Media body onClick={() => this.handleChannel(channel.id)}>
                    <Media heading>{channel.name}</Media>
                    {channel.description}
                  </Media>
                  <hr />
                </Media>
              </Media>
            ))
          : null}
      </div>
    );
  }
}

export default Starter;

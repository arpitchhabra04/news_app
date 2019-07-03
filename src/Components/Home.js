import React, { Component } from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
// import Feeds from "./NewsFeeds";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
class Starter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: []
    };
  }
  componentDidMount() {
    // const chan = chan.slice(0,10);
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
    // this.handleChannel = this.handleChannel.bind(this);
  }
  // handleChannel(id) {
  //   <Feeds query={id} />;
  //   onClick={() => this.handleChannel(channel.i}
  // }
  render() {
    return (
      <div>
        <div className="jumbotron container">
          <h2> News Channels</h2>
        </div>

        <div id="columns">
          {this.state.channels.length
            ? this.state.channels.map(channel => (
                <Card key={channel.id}>
                  {/* <CardImg top width="100%" src={news.urlToImage} alt={news.title} /> */}
                  <CardBody>
                    <CardTitle>{channel.name}</CardTitle>
                    <CardText>{channel.description}</CardText>
                    <Button color="danger">
                      <Link
                        to={{
                          pathname: "/feeds",
                          state: { queryId: channel.id }
                        }}
                      >
                        Top Headlines
                      </Link>
                    </Button>
                  </CardBody>
                </Card>
              ))
            : null}
          {/* <IntersectionVisible onShow={()=>}>
                  <div></div>
                </IntersectionVisible> */}
        </div>
      </div>
    );
  }
}

export default Starter;

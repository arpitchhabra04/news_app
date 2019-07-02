import React, { Component } from "react";
import axios from "axios";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: []
    };
  }

  componentDidMount() {
    const { queryId } = this.props.location.state || false;
    if (!queryId) this.props.history.push("/home");
    axios
      .get(
        "https://newsapi.org/v2/everything?sources=" +
          queryId +
          "&apiKey=b4095000fa984a889c24d0c02b886820"
      )
      .then(response =>
        this.setState({
          feeds: response.data.articles
        })
      );
  }
  render() {
    // console.log(this.location.query);
    const { feeds } = this.state;
    var feedsList = feeds.map(feed => (
      <div className="col-12 col-md-3 m-1">
        <Card key={feed.source.id}>
          <CardImg top width="100%" src={feed.urlToImage} alt={feed.title} />
          <CardBody>
            <CardTitle>{feed.title}</CardTitle>

            <CardText>{feed.description}</CardText>
          </CardBody>
        </Card>
      </div>
    ));

    return (
      <div className="container">
        {/* <h1>{this.state.queryI}</h1> */}
        {/* <h1>{this.props.location}</h1> */}
        <div className="row">{feedsList}</div>
      </div>
    );
  }
}

export default Feeds;

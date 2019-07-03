import React, { Component } from "react";
import axios from "axios";
import "./Check.css";
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
    if (this.state.feeds.length < 1) {
      return (
        <img
          className="loading container"
          src="
          https://media3.giphy.com/media/jAYUbVXgESSti/200w.webp?cid=790b76115d1cd3774f4f4636490ebf4f&rid=200w.webp"
        />
      );
    } else {
      const { feeds } = this.state;
      var feedsList = feeds.map(feed => (
        <Card key={feed.source.id}>
          <CardImg top width="100%" src={feed.urlToImage} alt={feed.title} />
          <CardBody>
            <CardTitle>{feed.title}</CardTitle>

            <CardText>{feed.description}</CardText>
          </CardBody>
        </Card>
      ));

      return <div id="columns">{feedsList}</div>;
    }
  }
}

export default Feeds;

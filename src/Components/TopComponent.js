import React, { Component } from "react";
import axios from "axios";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topNews: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=b4095000fa984a889c24d0c02b886820"
      )
      .then(response =>
        this.setState({
          topNews: response.data.articles
        })
      );
  }
  render() {
    // console.log(this.location.query);
    const { topNews } = this.state;
    var newsList = topNews.map(top => (
      <Card key={top.source.id}>
        <CardImg top width="100%" src={top.urlToImage} alt={top.title} />
        <CardBody>
          <CardTitle>{top.title}</CardTitle>

          <CardText>{top.description}</CardText>
        </CardBody>
      </Card>
    ));

    return (
      <div>
        <div className="container h1 Trend rounded mt-2 mb-1">Trending</div>
        <div id="columns">{newsList}</div>
      </div>
    );
  }
}

export default Feeds;

import React, { Component } from "react";
import axios from "axios";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class Check extends Component {
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
      <div className="col-12 col-md-3">
        <div id="columns">
          <figure>
            <img src={top.urlToImage} />
            <figcaption>{top.title}</figcaption>
          </figure>
        </div>
      </div>
    ));

    return (
      <div className="container">
        <div className="row">{newsList}</div>
      </div>
    );
  }
}

export default Check;

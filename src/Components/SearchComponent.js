import React, { Component } from "react";
import axios from "axios";
import { Form, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsSearch: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    var query = this.input.value;
    console.log(this.input.value);
    this.componentDidMount(query);
  }
  componentDidMount(query) {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=" +
          query +
          "&apiKey=b4095000fa984a889c24d0c02b886820"
      )
      .then(response =>
        this.setState({
          newsSearch: response.data.articles
        })
      );
  }
  render() {
    const { newsSearch } = this.state;
    var searchList = newsSearch.map(news => (
      <Card key={news.source.id}>
        <CardImg top width="100%" src={news.urlToImage} alt={news.title} />
        <CardBody>
          <CardTitle>{news.title}</CardTitle>

          <CardText>{news.description}</CardText>
        </CardBody>
      </Card>
    ));
    return (
      <React.Fragment>
        <Form
          className="col-12 col-md-9 mb-2 mt-2 container"
          onSubmit={this.handleSubmit}
        >
          <input
            className="col-12 form-control"
            placeholder="Search News"
            ref={input => (this.input = input)}
          />
        </Form>

        <div id="columns">{searchList}</div>
      </React.Fragment>
    );
  }
}

export default Search;

import React, { Component } from "react";
import Header from "./Components/HeaderComponent";
import "./App.css";
import Starter from "./Components/Home";
import Footer from "./Components/FooterComponent";
import Search from "./Components/SearchComponent";
import Feeds from "./Components/NewsFeeds";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import Check from "./Components/Check";
import TopNews from "./Components/TopComponent";
import About from "./Components/AboutComponent";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const Homepage = props => {
      return <Starter />;
    };
    return (
      <BrowserRouter>
        <div>
          {/* <Feeds /> */}

          <Header />
          <Switch>
            <Route path="/topnews" component={TopNews} />
            <Route exact path="/home" component={Homepage} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/feeds" component={Feeds} />
            <Route exact path="/check" component={Check} />
            <Route exact path="/about" component={About} />
            <Redirect to="/topnews" />
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

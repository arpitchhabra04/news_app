import React, { Component } from "react";
import Header from "./Components/HeaderComponent";
import "./App.css";
import Starter from "./Components/Home";
import Footer from "./Components/FooterComponent";
import Search from "./Components/SearchComponent";
import Check from "./Components/Check";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const Homepage = () => {
      return <Starter />;
    };
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route exact path="/search" component={Search} />
            {/* <Route exact path="/contactus" component={Contact} /> */}
            <Redirect to="/home" />
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React from "react";
import Header from "./Components/HeaderComponent";
import "./App.css";
import Starter from "./Components/Home";
import Footer from "./Components/FooterComponent";
import Search from "./Components/SearchComponent";
function App() {
  return (
    <div className="App">
      <Header />
      <Starter />
      {/* <Search /> */}
      <Footer />
    </div>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BlogContainer from "./Container/BlogContainer/BlogContainer";

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Navbar />
       <BlogContainer/>
      </div>
    );
  }
}

export default App;

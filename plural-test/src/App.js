import React, { Component } from "react";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Sidebar />
          <div className="rightContentContainer">
            <Switch>
              <Route path="/" component={Home} exact={true}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

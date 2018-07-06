import React, { Component } from 'react';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header />
        <Sidebar />
        <div className="rightContentContainer">
          <Route path='/' component={Home} />
          <Route path='/foo' component={Home} />
        </div>
      </div>
    </Router>
    );
  }
}

export default App;

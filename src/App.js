import React, { Component } from 'react';
import SideBar from './components/SideBar/SideBar';
import MainSection from './components/MainSection/MainSection';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      issues: [],
      filter: '',
    };
  }
  render() {
    return (
      <div className="app">
        <SideBar />
        <MainSection />
      </div>
    );
  }
}

export default App;

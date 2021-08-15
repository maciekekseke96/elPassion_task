import React, { Component } from 'react';
import SideBar from './components/SideBar/SideBar';
import MainSection from './components/MainSection/MainSection';
import { temp_issues } from './temp_issues/temp_issues';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      issues: temp_issues,
      filter: 'all',
    };
  }

  setIssues = (updatedIssues) => {
    this.setState({
      issues: updatedIssues,
    });
  };
  setFilter = (filter) => {
    this.setState({
      filter,
    });
  };
  render() {
    return (
      <div className="app">
        <SideBar filter={this.state.filter} setFilter={this.setFilter} issues={this.state.issues} />
        <MainSection issues={this.state.issues} setIssues={this.setIssues}  filter={this.state.filter} />
      </div>
    );
  }
}

export default App;

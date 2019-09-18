import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(function (state) {
      return { clickCount: state.clickCount + 1 };
    });
  }
  render() {
    return (<h2 style={{cursor: 'pointer', color: '#FFF'}} onClick={this.handleClick}>点我！点击次数为: {this.state.clickCount}</h2>);
  }
}

export default class About extends Component {
  render(){ 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter/>
        </header>
      </div>
    )
  }
}
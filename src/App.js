import React, { Component } from 'react';
import axios from "axios";

import './App.css';
import { RouterComponent } from './components/router';

export class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  onLoad = () => {
    axios
      .get("http://localhost:5000/user/all")
      .then(response => {
        this.setState({
          data: response.data
          
        });
      })
  }


  componentDidMount() {
    this.onLoad();

  }


  render() {
    return (
      <div>
        <RouterComponent onLoad={this.onLoad} dataSent={this.state.data} />

      </div>
    );
  }


}

export default App;

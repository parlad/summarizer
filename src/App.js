import React, { Component } from 'react';
import './App.css';
//components
// import Summarizers from './components/Summarizers'

class App extends Component {

  render() {
    let summarizers = this.props && this.props.summarizers.length > 0 ?
    this.props.summarizers.map(p=>
      <li className = "summarizers"> Hello World </li>
    ) : <span> <h1>Error</h1></span>;

  return (
    <div>
      <ul>{summarizers}</ul>
    </div>
  );  
  }

  state = {
      summarizers: []
  };


  componentDidMount() {
    fetch('https://5ygokxicdg.execute-api.us-east-1.amazonaws.com/default/get_news')
    .then(res => res.json())
    .then((data) => {
      this.setState({ summarizers: data })
    })
    .catch(console.log)
  }
}

export default App
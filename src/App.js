import React, { Component } from 'react';
import './App.css';
import { Author, NewQuote, Retweet } from './components/main';

class App extends Component {
  constructor(props) {
    super(props);
    this.END_POINT = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    this.state = {
      arr: [],
      quote: '',
      author: ''
    }
  }
  componentDidMount() {
    fetch(this.END_POINT)
    .then(response => response.json())
    .then(data => {
      this.setState({
        arr: this.state.arr.concat(data.quotes)
      })
      this.getRandomQuote();
    })
  };
  getRandomQuote = event => {
    let index = Math.floor(Math.random() * this.state.arr.length);
    this.setState({
      quote: this.state.arr[index].quote,
      author: this.state.arr[index].author
    })
  };

  render() {

    return(
      <div id="quote-box">
        <Quote quote={this.state.quote}/>
        <Author author={this.state.author}/>
        <div id="wrapper">
        <Retweet quote={this.state.quote} author={this.state.author}/>
        <NewQuote onClick={this.getRandomQuote}/>
        </div>
      </div>
    )
  }
};

const Quote = (props) => {
  return (
    <p id="text">
      "{props.quote}"
    </p>
  )
};

export default App;

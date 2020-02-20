import React, { Component } from "react";
import QuoteText from "./QuoteText";
import QuoteAuthor from "./QuoteAuthor";
import TweetLink from "./TweetLink";
import NewQuoteBtn from "./NewQuoteBtn";
import LoadingAnimation from "react-circle-loading-animation";
class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      randomIndex: 0,
      loading: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      randomIndex: Math.floor(Math.random() * 101)
    });
  }
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          quotes: data.quotes,
          loading: false,
          randomIndex: Math.floor(Math.random() * 101)
        });
      });
  }
  render() {
    if (this.state.loading) {
      return (
        <div>
          {/* LOADING CIRCLE ON LOADING */}
          <LoadingAnimation isLoading={true} />
        </div>
      );
    } else {
      // ----- GET A RANDOM HEX COLOR BELOW-----
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      // ----- GET A RANDOM HEX COLOR ABOVE-----
      const { randomIndex } = this.state;
      const { quote } = this.state.quotes[randomIndex];
      const { author } = this.state.quotes[randomIndex];
      return (
        <div id="quote-box" className="quote-box">
          <QuoteText color={color} quote={quote} />
          <QuoteAuthor color={color} author={author} />
          <div className="links">
            <TweetLink color={color} quote={quote} author={author} />
            <NewQuoteBtn color={color} handleClick={this.handleClick} />
          </div>
        </div>
      );
    }
  }
}

export default QuoteBox;

import React from "react";

function TweetLink(props) {
  return (
    <a
      title="tweet quote"
      target="_blank"
      href={`https://twitter.com/intent/tweet?text=${props.quote} - ${props.author}`}
      id="tweet-quote"
      rel="noopener noreferrer"
      className="tweet-quote"
    >
      <i style={{ color: props.color }} className="fab fa-twitter-square"></i>
    </a>
  );
}

export default TweetLink;

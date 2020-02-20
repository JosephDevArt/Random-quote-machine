import React from "react";

function QuoteAuthor(props) {
  return (
    <p style={{ color: props.color }} id="author" className="author">
      -{props.author}
    </p>
  );
}

export default QuoteAuthor;

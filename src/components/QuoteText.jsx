import React from "react";

function QuoteText(props) {
  return (
    <p style={{ color: props.color }} id="text" className="quote-text">
      {props.quote}
    </p>
  );
}

export default QuoteText;

import React from "react";

function NewQuoteBtn(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      onClick={props.handleClick}
      id="new-quote"
      className="new-quote-btn"
    >
      New Quote
    </button>
  );
}

export default NewQuoteBtn;

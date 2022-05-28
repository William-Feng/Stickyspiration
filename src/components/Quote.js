import React, { useEffect, useState } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import "./Quote.css";

function Quote() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    return await fetch("https://api.quotable.io/random?tags=inspirational")
      .then((response) => response.json())
      .then((response) => setQuote(response));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote">
      <ImQuotesLeft className="quote-left" />
      <div className="text-container">
        <h1>{quote.content}</h1>
      </div>
      <ImQuotesRight className="quote-right" />
      <div className="author-container">
        <h3>&ndash; {quote.author}</h3>
      </div>
      <button onClick={fetchQuote}>New quote!</button>
    </div>
  );
}

export default Quote;

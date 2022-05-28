import React, { useEffect, useState } from "react";

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
    <div>
      {quote.content}
      {quote.author}
      <button onClick={fetchQuote}>Get new quote</button>
    </div>
  );
}

export default Quote;

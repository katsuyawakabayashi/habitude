import React, { useState, useEffect } from "react";
import TimeStatus from "./TimeStatus";
import Quote from "./Quote";

const quoteUrl = "https://type.fit/api/quotes";

const GreetingPanel = () => {
  let [text, setText] = useState("");
  let [author, setAuthor] = useState("");

  var quoteList = [];
  useEffect(() => {
    // fetch(quoteUrl)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     quoteList = JSON.parse(JSON.stringify(data));
    //     const quoteId = Math.floor(Math.random() * quoteList.length);
    //     setText(quoteList[quoteId].text);
    //     setAuthor(quoteList[quoteId].author);
    //   });
  }, []);

  if (!author) {
    setAuthor("Unknown");
  }

  return (
    <div>
      <TimeStatus />
      <Quote text={text} author={author} />
    </div>
  );
};

export default GreetingPanel;

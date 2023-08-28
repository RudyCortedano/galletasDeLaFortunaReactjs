import React from "react";

const Cookie = ({ quote }) => {
  return (
    <main className="container">
      <div className="box__cookie">
        <p className="box__phrase"> {quote.phrase}</p>
        <p className="box__phrase"> {quote.author}</p>
      </div>
    </main>
  );
};

export default Cookie;

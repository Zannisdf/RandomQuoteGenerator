import React from 'react';

export const Author = (props) => {
  return (
    <p id="author">
      {props.author}
    </p>
  )
};

export const NewQuote = (props) => {
  return (
    <button type="button" id="new-quote" onClick={props.onClick}>
      Get new quote!
    </button>
  )
};

export const Retweet = (props) => {
  let link = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(`${props.quote} - ${props.author}`)
  return (
      <a href={link} id="tweet-quote" className="twitter-share-button" data-size="large">Tweet</a>
  )
};

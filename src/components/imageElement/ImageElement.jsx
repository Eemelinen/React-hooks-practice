import React from 'react';

function ImageElement() {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <article>
      <img src={`https://source.unsplash.com/random/${getRandomInt(200, 300)}x${getRandomInt(200, 300)}`} alt="random" alt></img>
    </article>
  )
}

export default ImageElement;
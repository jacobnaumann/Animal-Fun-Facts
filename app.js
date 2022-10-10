import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const background = <img class="background" alt="ocean" src="/images/ocean.jpg" />

const title = "Testing title";

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      rold="button"
      onClick={displayFact}
    />
  )
};

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const randomIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[randomIndex];
  document.getElementById("fact").innerHTML = funFact;
}

const showBackground = true;

const animalFacts = (
  <div>
    <h1>{title || "Click an aminal for a fun fact"}</h1>
    {showBackground && background}
    <p id="fact"></p>
    <div className="animals">
      {images}
    </div>
  </div>
);
ReactDOM.render(animalFacts, document.getElementById("root"));
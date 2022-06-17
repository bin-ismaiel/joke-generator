import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [joke, setJoke] = useState("...");
  const [background, setBackground] = useState("");
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  function newJoke() {
    const getJoke = async () => {
      try {
        const { data } = await axios("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        });
        setJoke(data.joke);
      } catch (error) {
        console.log(error.response);
      }
      newBackground();
    };
    getJoke();
  }
  function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }
  function newBackground() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    setBackground(hexColor);
  }
  return (
    <>
      <nav>
        <div class="nav-center">
          <h4>Joke Generator</h4>
        </div>
      </nav>
      <main style={{ backgroundColor: background }}>
        <div class="container">
          <h2>{joke}</h2>
          <button class="btn btn-hero" onClick={newJoke}>
            click me
          </button>
        </div>
      </main>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Result from "./components/Result";
import Animal from "./components/Animal";
import AnimalsBox from "./components/AnimalsBox";
import { animals } from "./data/AnimalsDb";

const selectRandomAnimal = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex].name;
};

function App() {
  const [result, setResult] = useState("");
  const [randomAnimal, setRandomAnimal] = useState(selectRandomAnimal());
  const [selectedAnimal, setSelectedAnimal] = useState("");

  const checkResult = (selectedAnimal) => {
    if (selectedAnimal === randomAnimal) {
      setResult("Win!");

      setTimeout(() => {
        setResult("");
        setRandomAnimal(selectRandomAnimal(animals));
      }, 5000);
    } else {
      setResult("Lose!");
    }
  };

  return (
    <div className="container">
      <header className="border-orange">
        <h1>Animal Matching Game</h1>
      </header>

      <div className="board">
        <Result result={result} />

        <Animal
          animals={animals}
          randomAnimal={randomAnimal}
          setRandomAnimal={setRandomAnimal}
        />

        <AnimalsBox
          animals={animals}
          checkResult={checkResult}
          selectedAnimal={selectedAnimal}
          setSelectedAnimal={setSelectedAnimal}
        />
      </div>
    </div>
  );
}

export default App;

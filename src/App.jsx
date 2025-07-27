import { useState } from "react";
import Die from "./MyComponents/Die";
import { nanoid } from "nanoid";

const App = () => {
  const AllNewDice = () => {
    return new Array(10).fill(0).map(() => {
      return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      };
    });
  };
  const [dieValue, setDieValue] = useState(AllNewDice());

  const diceElements = dieValue.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        onClick={() => hold(die.id)}
      />
    );
  });

  const roll = () => {
    setDieValue((prevDieValue) => {
      return prevDieValue.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) };
      });
    });
  };

  const hold = (id) => {
    setDieValue((prevDieValue) => {
      return prevDieValue.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  };

  return (
    <>
      <main className="main">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="container">{diceElements}</div>

        <button className="dice-roll" onClick={roll}>
          Roll
        </button>
      </main>
    </>
  );
};

export default App;

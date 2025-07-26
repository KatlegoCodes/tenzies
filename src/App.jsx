import { useState } from "react";
import Die from "./MyComponents/Die";

const App = () => {
  const AllNewDice = () => {
    return new Array(10).fill(0).map(() => {
      return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      };
    });
  };
  const [dieValue, setDieValue] = useState(AllNewDice());

  const diceElements = dieValue.map((die, index) => {
    return <Die key={index} value={die.value} isHeld={die.isHeld} />;
  });

  const roll = () => {
    setDieValue(AllNewDice());
  };

  return (
    <>
      <main className="main">
        <div className="container">{diceElements}</div>

        <button className="dice-roll" onClick={roll}>
          Roll
        </button>
      </main>
    </>
  );
};

export default App;

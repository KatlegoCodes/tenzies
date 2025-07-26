import { useState } from "react";
import Die from "./MyComponents/Die";

const App = () => {
  const AllNewDice = () => {
    return new Array(10).fill(0).map(() => {
      return Math.ceil(Math.random() * 6);
    });
  };
  const [dieValue, setDieValue] = useState(AllNewDice());

  const diceElements = dieValue.map((die, index) => {
    return <Die key={index} value={die} />;
  });

  return (
    <>
      <main className="main">
        <div className="container">{diceElements}</div>
      </main>
    </>
  );
};

export default App;

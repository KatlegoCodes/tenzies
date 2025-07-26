import Die from "./My Components/Die";

const App = () => {
  const dieValue = 1;

  return (
    <>
      <main className="main">
        <Die value={dieValue} />
      </main>
    </>
  );
};

export default App;

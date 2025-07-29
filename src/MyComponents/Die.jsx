const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <button
      style={styles}
      onClick={props.onClick}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, ${
        props.isHeld ? "held" : "not held"
      }`}
    >
      {props.value}
    </button>
  );
};

export default Die;

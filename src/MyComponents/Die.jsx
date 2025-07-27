const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <button style={styles} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Die;

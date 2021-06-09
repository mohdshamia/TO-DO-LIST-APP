import "./Styles.css";

// function Button (props){

function Button({ isPurble, handleClick, text }) {
  return (
    <button
      className={isPurble ? "btn backgrounded-button" : "btn"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;

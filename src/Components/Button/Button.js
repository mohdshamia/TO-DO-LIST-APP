import "./Styles";
import {StyledButton} from "./Styles";

// function Button (props){

function Button({ isPurple, handleClick, text }) {
  return (
    <StyledButton
        isPurple={isPurple}
      onClick={handleClick}
    >
      {text}
    </StyledButton>
  );
}

export default Button;

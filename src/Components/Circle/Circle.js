import React from 'react';
import {StyledCircle} from "./Styles";

function Circle(props) {
    return (
        <StyledCircle {...props}>
            {props.progress}
        </StyledCircle>
    );
}

export default Circle;
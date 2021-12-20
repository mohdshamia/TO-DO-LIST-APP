import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const sharedCss=css`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 21px;
  background:${props => props.isPurple ? `${props.theme.colors.primary}; color:${props.theme.colors.white}`:props.theme.colors.white};
  border: none;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

`

export const StyledButton=styled.button`
    ${sharedCss}
`

export const StyledLink=styled(Link)`
  ${sharedCss}
`
import styled from "styled-components";
import {FlexCol, FlexRow} from "../../GlobalStyles/Global.styles";
import {Link} from "react-router-dom";

export const InnerContainer=styled(FlexCol)`
  align-items: center;
  height: 100%;
`

export const Section=styled(FlexRow)`
  justify-content: space-between;
`
export const Title=styled.h1`
  font-size: 32px;
  color: #fff;
  margin: 20px auto;

  ${Section}:hover &{
    color: orange;
  }
`
export const StyledInput=styled.input.attrs(props=>({
    type: props.type || 'text'
}))`
  width: 100%;
  height: 40px;
  border-radius: 21px;
  text-indent: 20px;
  border: none;
  
  &:focus{
    border: none;
    outline: none;
  }
  
  &::placeholder{
    color: gray;
    font-weight: 700;
  }

`

export const InputBox=styled(FlexCol)`
  width: 70%;
`

export const ErrorMessage=styled.span`
  color: #fff;
`

export const ItemsSection=styled(FlexCol)`
  align-items: center;
  margin-top: 30px;
  overflow-y: auto;
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`;

export const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  ${StyledLink}:hover & {
    fill: rebeccapurple;
  }
`;
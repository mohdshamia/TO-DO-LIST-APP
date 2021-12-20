import styled from "styled-components";
import {FlexRow} from "../../GlobalStyles/Global.styles";

export const StyledCircle=styled(FlexRow)(props=>({
    justifyContent: "center",
    alignItems: "center",
    color: props.color,
    background: props.background,
    fontSize:props.fontSize,
    width:props.size,
    height:props.size,
    borderRadius: "50%",
}))
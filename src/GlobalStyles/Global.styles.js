import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    box-sizing: border-box;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  
  main {
    margin: 0px auto;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    max-width: 1920px;
    min-height: 100vh;
    background: ${props => props.theme.colors.primary};
  }
`

export const FlexBox=styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: start;
`

export const FlexCol=styled(FlexBox)`
  flex-direction: column;
`

export const FlexRow=styled(FlexBox)`
  flex-direction: row;
`
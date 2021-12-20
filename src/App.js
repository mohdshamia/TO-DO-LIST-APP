import HomeScreen from './Screens/HomeScreen/HomeScreen';
import {Container} from "./GlobalStyles/App.styles";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./GlobalStyles/Global.styles";

const theme={
    colors:{
        primary:'linear-gradient(189.77deg, #7135d8 14.69%, #542acc 85.31%)',
        white:'#fff',
        black: "#000"
    }
}

function App () {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <main>
            <Container>
                {/*Screens*/}
                <HomeScreen/>
            </Container>

        </main>
        </ThemeProvider>

    );

}

export default App
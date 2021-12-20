import { render, screen} from "@testing-library/react";
import HomeScreen from './Screens/HomeScreen/HomeScreen';

describe("app test", function () {
    it("should app ",function () {
        render(
            <HomeScreen/>
        )
        const textElimant = screen.getByText("react app")
        expect(textElimant).toBeInTheDocument();
    })
    
})
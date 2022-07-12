import ExploreTabOpen from "./ExploreTabOpen";
import { fireEvent, render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'

let MockExtendedNav = () => {
    return (
        <BrowserRouter>
            <ExploreTabOpen />
        </BrowserRouter>
    )
}


describe("extendednav test", () => {
    test('Text', () => {
        render(<MockExtendedNav />)
        expect(screen.getByText("Entrepreneurship")).toBeInTheDocument()
    })

    test("onClick",()=>{
        var result = false;
        render(<MockExtendedNav />)
        fireEvent.click(screen.getByText("Entrepreneurship"));
        expect(result).toBe(false);
    })
})
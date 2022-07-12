import { render, screen } from "@testing-library/react";
import SearchBarComponent from "./SearchBarComponent";

describe("Search bar test" , () => {
    test("Search bar" , () => {
        render(<SearchBarComponent />)
        const searchBarElement = screen.getByPlaceholderText("Search by title or author")
        expect(searchBarElement).toBeInTheDocument()
    })
})
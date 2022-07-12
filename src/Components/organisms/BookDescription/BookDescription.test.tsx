import React from "react";
import { screen, render } from "@testing-library/react";
import BookDescription from "./BookDescription";

describe("Book description unit tests", () => {
    test("Heading test", () => {
        render(<BookDescription />)
        const bookDescriptionHeading = screen.getByRole('heading');
        expect(bookDescriptionHeading).toHaveTextContent('Beyond Entrepreneurship 2.0')
    })

    test("Image test" , () => {
        render(<BookDescription />)
        const image = screen.getByAltText('book')
        expect(image).toBeInTheDocument();
    })

    test("Button" , () => {
        render(<BookDescription />)
        const buttons = screen.getAllByRole('button')
        expect(buttons[0]).toHaveTextContent('ReadNow')
        expect(buttons[1]).toHaveTextContent('Finished Reading')
        expect(buttons[2]).toHaveTextContent('send to kindle')
    })

    
})
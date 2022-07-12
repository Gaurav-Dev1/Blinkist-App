import React from "react";
import { screen, render } from "@testing-library/react";
import BookCategories from "./BookCategories";
import { BrowserRouter } from "react-router-dom";

let MockBookCategories = (args: any) => {
    return (
        <BrowserRouter>
            <BookCategories {...args}/>
        </BrowserRouter>
    )
}

describe("Book categories text", () => {

    test("Trending book test", () => {
        render(<MockBookCategories status="trending" title = 'Trending blinks'/>)
        const trendingBooks = screen.getByTestId('books')
        expect(trendingBooks).toBeInTheDocument();
    })

    test("Featured book test", () => {
        render(<MockBookCategories status="featured" title = 'Featured audio blinks'/>)
        const featuredBooks = screen.getByTestId('books')
        expect(featuredBooks).toBeInTheDocument();
    })

    test("Just added book test", () => {
        render(<MockBookCategories status="featured" title = 'Just added'/>)
        const justAddedBooks = screen.getByTestId('books')
        expect(justAddedBooks).toBeInTheDocument();
    })
})
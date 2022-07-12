import Header from "./Header";
import {screen, render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import exp from "constants";


let MockHeader = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}

describe("Header test", () => {
    test("Logo existance test", () => {
        render(<MockHeader />)
        
        const myLogoText = screen.getByAltText("My logo")
        expect(myLogoText).toBeInTheDocument();
    })

    test("MyLibrary test", () => {
        render(<MockHeader />)
        const myLibraryElement = screen.getByText('My Library')
        expect(myLibraryElement).toBeInTheDocument();
        fireEvent.click(myLibraryElement)
        let myLibraryPage = screen.getByText('My Library')
        expect(myLibraryPage).toBeInTheDocument();
        
    })

    test("more tests", async () => {
        render(<MockHeader />);
    
    
        const myLibrary = screen.queryByText(/My Library/i);
        expect(myLibrary).not.toBeNull();
    
        const explore = screen.queryByText(/Explore/i);
        expect(explore).not.toBeNull();
    });

    // test("explore test" , () => {
    //     render(<MockHeader />)
        
    //     const logos = screen.getAllByRole('img')
    //     let element = logos[2]

    //     fireEvent.click(element)
    //     let exploreNavTest = screen.getByText('Politics')
    // })
})
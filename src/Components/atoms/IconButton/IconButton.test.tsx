import React from "react";
import { render, screen } from '@testing-library/react';
import IconButtonComponent from "./IconButton";
import {ReactComponent as Search} from '../../../Images/Search.svg'
import {ReactComponent as Clock} from '../../../Images/clock.svg'


describe("IconButton test", () => {
    test("IconButton for search icon test" , () => {
        render(<IconButtonComponent children={<Search />}/>)
        const searchIconButton = screen.getByTestId('IconButton')
        expect(searchIconButton).toBeInTheDocument();
    })

    test("Checking for dropdown icon", () => {
        render(<IconButtonComponent children={<Clock />} />)
        const clockIconButton = screen.getByTestId('IconButton')
        expect(clockIconButton).toBeInTheDocument()
    })
})
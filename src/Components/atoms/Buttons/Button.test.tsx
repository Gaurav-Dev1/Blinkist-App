import React from "react";
import { screen, render } from "@testing-library/react";
import ButtonComponent from './Button'
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

describe("Button Test" , () => {
    test("Button with start icon and text" , () => {
        render(<ButtonComponent startIcon={<AddIcon />} children="Add to Library"/>)
        const buttonWithAddIcon = screen.getByRole('button')
        expect(buttonWithAddIcon).toBeInTheDocument();
    })

    test("Button with and icon and text", () => {
        render(<ButtonComponent endIcon={<ArrowForwardIcon />} children="Send to kindle"/>)
        const buttonWithAddIcon = screen.getByRole('button')
        expect(buttonWithAddIcon).toBeInTheDocument();
    })

    test("Button with text", () => {
        render(<ButtonComponent children="Read Now"/>)
        const buttonWithAddIcon = screen.getByRole('button')
        expect(buttonWithAddIcon).toBeInTheDocument();
    })
})

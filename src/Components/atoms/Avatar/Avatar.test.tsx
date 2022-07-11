import React from "react";
import { render, screen } from '@testing-library/react';
import { AvatarIcon } from "./Avatar";

describe("AvatarIcon Test", () => {
    test("Avatar icon with letter G", () => {
        render(<AvatarIcon letter="G"/>)
        const name = screen.getByTestId("Avatar");
        expect(name.textContent).toBe('G');
    })

    test("Avatar icon with letter A", () => {
        render(<AvatarIcon letter="A"/>)
        const name = screen.getByTestId("Avatar");
        expect(name.textContent).toBe('A');
    })
})
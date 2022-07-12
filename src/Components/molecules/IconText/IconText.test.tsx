import { render, screen } from "@testing-library/react";
import IconText from "./IconText";
import Science from '../../../Images/Science.svg'
import Entrepreneurship from '../../../Images/entrepreneurship.svg'

describe("IconText component test", () => {
    test("Science icon with text test", () => {
        render(<IconText imgSrc={Science} variant="body2" title="Science"/>)
        const ScienceIconText = screen.getByTestId('IconText')
        expect(ScienceIconText).toHaveTextContent("Science")
        expect(ScienceIconText).toBeInTheDocument();
    })

    test("Entrepreneurship icon with text test", () => {
        render(<IconText imgSrc={Entrepreneurship} variant="body2" title="Entrepreneurship"/>)
        const  EntrepreneurshipIconText = screen.getByTestId('IconText')
        expect(EntrepreneurshipIconText).toHaveTextContent("Entrepreneurship")
        expect(EntrepreneurshipIconText).toBeInTheDocument();
    })
})
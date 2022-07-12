import { render } from "@testing-library/react";
import BannerComponent from './BannerComponent'

describe("Banner test", () => {
    test("Banner checking", () => {
        render(<BannerComponent />)
    })
})

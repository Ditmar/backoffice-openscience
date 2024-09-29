import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"

import { TabLabel } from "./TabLabel"

describe("Testing for TabLabel component ", () => {
    it("TabLabel is rendering", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="small" />)
    })

    it("TabLabel has a title", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="small" />)
        screen.getByText("TabLabel")
    })

    it("TabLabel has a small variant", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="small" />)
        screen.getByText("TabLabel")
    })

    it("TabLabel has a medium variant", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="medium" />)
        screen.getByText("TabLabel")
    })

    it("TabLabel has a large variant", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="large" />)
        screen.getByText("TabLabel")
    })

    it("TabLabel has a disabled state", () => {
        render(<TabLabel text="TabLabel" isEnable={false} variant="small" />)
        screen.getByText("TabLabel")
    })

    it("TabLabel has a selected state", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="small" isSelect={true} />)
        screen.getByText("TabLabel")
    })

    it("TabLabel has a active state", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="small" />)
        screen.getByText("TabLabel")
    })

})
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../Header"

test("should test Header", () => {
  render(<Header />)
  const heading = screen.getByText("Header")
  expect(heading).toBeInTheDocument()
})

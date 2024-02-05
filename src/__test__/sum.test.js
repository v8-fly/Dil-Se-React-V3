import { sum } from "../sum"

test("should return addition of 2 numbers", () => {
  const result = sum(1, 2)
  expect(result).toBe(3)
})

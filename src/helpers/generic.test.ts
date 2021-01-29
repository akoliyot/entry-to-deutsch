import { add } from "./generic";

describe('Generic', () => {
  it('should return correct sum', () => {
    expect(add(3,9)).toBe(12);
  })
})
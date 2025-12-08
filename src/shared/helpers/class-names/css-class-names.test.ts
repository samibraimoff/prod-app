import { cssClassNames } from "./css-class-names"

describe("cssClassName", () => {
  test ("returns required class name only", () => {
    const result = cssClassNames("btn", {}, []);
    expect(result).toBe("btn");
  })

  test("returns required and optional class names", () => {
    const result = cssClassNames("btn", { "btn-primary": true, "btn-disabled": false }, []);
    expect(result).toBe("btn btn-primary");
  })

  test("returns required, optional and mod class names", () => {
    const result = cssClassNames("btn", { "btn-primary": true }, ["large", "rounded"]);
    expect(result).toBe("btn large rounded btn-primary");
  })
})
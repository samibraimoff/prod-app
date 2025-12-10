import { cssClassNames } from "shared/helpers/class-names/css-class-names"

describe("cssClassName", () => {
  it("returns required class name only", () => {
    const result = cssClassNames("btn", {}, []);
    expect(result).toBe("btn");
  })

  it("returns required and optional class names", () => {
    const result = cssClassNames("btn", { "btn-primary": true, "btn-disabled": false }, []);
    expect(result).toBe("btn btn-primary");
  })

  it("returns required, optional and mod class names", () => {
    const result = cssClassNames("btn", { "btn-primary": true }, ["large", "rounded"]);
    expect(result).toBe("btn large rounded btn-primary");
  })
})
import { classNames } from "./classnames"

describe("classnames", () => {
    it("should return list of classes", () => {
        const expected = "class1 class2 class4";
        const result = classNames("class1", {"class2": true, "class3": false}, ["class4"])
        expect(result).toBe(expected)
    })

    it("should return first parameter class", () => {
        const expected = "class1 ";
        const result = classNames("class1", {}, [])
        expect(result).toBe(expected)
    })

    it("should return additional class", () => {
        const expected = "class1  additional";
        const result = classNames("class1", {}, ["additional"])
        expect(result).toBe(expected)
    })

    it("should return mods class", () => {
        const expected = "class1 classMod additional";
        const result = classNames("class1", {"classMod": true}, ["additional"])
        expect(result).toBe(expected)
    })
})
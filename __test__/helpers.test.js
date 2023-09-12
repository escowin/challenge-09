const { validate } = require("../utils/helpers")

test("returns true if data exists", () => {
    const data = { a: "hi"}
    expect(validate(data.a)).toEqual(true)
    expect(validate(data.b)).toEqual(false)
    expect(validate()).toEqual(false)
})
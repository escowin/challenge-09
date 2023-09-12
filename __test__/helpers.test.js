const { validate } = require("../utils/helpers")

test("returns true if data exists", () => {
    const data = { a: "hi", name: "msg"}
    expect(validate(data.a, "msg")).toEqual(true)
    expect(validate(data.b, data.name)).toEqual(false)
    expect(validate()).toEqual(false)
})
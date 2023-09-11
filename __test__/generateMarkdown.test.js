const { renderDetail } = require("../utils/generateMarkdown")
const { mockData } = require("../lib/mockData")

test("non-existant data returns empty inside template literal", () => {
    const data = { a: mockData.liveurl}
    expect(renderDetail(data.b)).toEqual("")
    expect(renderDetail(data.a)).toEqual(data.a)
})
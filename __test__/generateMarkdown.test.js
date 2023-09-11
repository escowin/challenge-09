const { renderDetail } = require("../utils/generateMarkdown")
const { mockData } = require("../lib/mockData")

test("non-existant data returns empty inside template literal", () => {
    const data = { a: "url-string", b: ""}
    expect(renderDetail(data.a, "liveurl")).toEqual(`| [Live URL](${data.a})`)
    expect(renderDetail(data.b, "")).toEqual("")
    expect(renderDetail()).toEqual("")
})
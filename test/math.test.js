const math = require('./averageThesisMarks')
test("Should calaculate total number of groups", () => {
    const average = math(50, 2000)
    expect(average).toBe(40)
})
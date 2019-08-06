const TextGrid = require("../src/textgrid.js")

describe("TextGrid tests", function () {

    it("should create a new grid", function () {
        const grid = new TextGrid.textGrid(4, 4)

        expect(grid.width).toEqual(4)
        expect(grid.height).toEqual(4)
        expect(grid.value(2, 3)).toEqual(".")
    })

    it("should print out the grid", function () {
        const grid = new TextGrid.textGrid(8, 4)

        const expected = "........\n........\n........\n........"

        expect(grid.toString()).toEqual(expected)
    })

})

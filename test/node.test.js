const Node = require("../src/node.js")

describe("Node tests", function () {

    it("should create a new node", function () {
        const node = new Node.node(1)

        expect(node.data).toEqual(1)
        expect(node.parent).toBeUndefined()
        expect(node.leftChild).toBeUndefined()
        expect(node.rightChild).toBeUndefined()
    })

    it("should convert the node to a string box", function () {

        const node = new Node.node("George Campbell")

        const expected = "-------------------\n" +
            "| George Campbell |\n" +
            "-------------------"

        expect(node.toString()).toEqual(expected)
    })

})

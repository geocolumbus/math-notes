const Tree = require("../src/tree.js")

describe("Tree tests", function () {

    it("should create an empty tree with a root node", function () {
        const tree = new Tree.tree()

        expect(tree.root.data).toBeUndefined()
        expect(tree.root.parent).toBeUndefined()
        expect(tree.root.leftChild).toBeUndefined()
        expect(tree.root.rightChild).toBeUndefined()
    })

    it("should add a left child node", function () {
        const tree = new Tree.tree()
        const child = tree.addLeftChild(tree.root, 23)

        expect(child.data).toEqual(23)
        expect(child.parent).toEqual(tree.root)
        expect(tree.root.leftChild).toEqual(child)
    })

    it("should add a right child node", function () {
        const tree = new Tree.tree()
        const child = tree.addRightChild(tree.root, 315)

        expect(child.data).toEqual(315)
        expect(child.parent).toEqual(tree.root)
        expect(tree.root.rightChild).toEqual(child)
    })

    it("should print out the tree", function () {
        const tree = new Tree.tree("A")
        tree.addLeftChild(tree.root, "B")
        tree.addRightChild(tree.root, "C")
        tree.addLeftChild(tree.root.leftChild, "D")
        tree.addRightChild(tree.root.leftChild, "E")

        const expected = "   A\n /   \\\n B   C\n/ \\\nD E"

        expect(tree.listTree()).toEqual(expected)
    })

})

const Node = require("./node.js")

const _tree = function (root) {

    return {
        root: root || new Node.node(),

        addLeftChild: function (node, data) {
            const child = new Node.node(data)
            child.parent = node
            node.leftChild = child
            return child
        },

        addRightChild: function (node, data) {
            const child = new Node.node(data)
            child.parent = node
            node.rightChild = child
            return child
        },

        toString: function() {
            return ""
        }
    }
}

exports.tree = _tree

const Node = require("./node.js")

const _tree = function (value) {

    return {
        root: new Node.node(value),

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

        listTree: function (node) {

            function r(pointer, level) {

                if (!levels[level]) {
                    levels.push([])
                }
                levels[level].push(pointer ? pointer.data : " ")

                if (!pointer) {
                    return
                }
                r(pointer.leftChild, level + 1)
                r(pointer.rightChild, level + 1)
            }

            let levels = []
            let textTree = []
            let ret = ""

            r(node || this.root, 0, 0)

            levels = levels.slice(0, levels.length - 1)

            let leftSpace = 0
            let innerSpace = 1
            for (let i = levels.length - 1; i > -1; i--) {
                let line = " ".repeat(leftSpace)
                let arrows = " ".repeat(leftSpace)
                let leftSlash = true
                for (let j = 0; j < levels[i].length; j++) {
                    line += levels[i][j]

                    if (levels[i][j] === " ") {
                        arrows += " "
                    } else if (leftSlash) {
                        arrows += "/"
                    } else {
                        arrows += "\\"
                    }

                    line += " ".repeat(innerSpace)
                    arrows += " ".repeat(innerSpace)

                    leftSlash = !leftSlash
                }
                textTree.push(line.trimEnd())
                if (i !== 0) {
                    textTree.push(arrows.trimEnd())
                }
                leftSpace = leftSpace * 2 + 1
                innerSpace = innerSpace * 2 + 1
            }

            for (let i = textTree.length - 1; i > -1; i--) {
                ret += textTree[i]
                if (i > 0) {
                    ret += "\n"
                }
            }

            return ret
        }
    }
}

exports.tree = _tree

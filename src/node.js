const _node = function (data) {
    return {
        data: data,
        parent: undefined,
        leftChild: undefined,
        rightChild: undefined,

        toString: function() {
            let result
            result = "-".repeat(this.data.length+4)
            result += `\n| ${this.data} |\n`
            result += "-".repeat(this.data.length+4)
            return result
        }
    }
}

exports.node = _node

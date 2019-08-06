const _textGrid = function (width, height) {
    return {
        width: width ? width : 1,
        height: height ? height : 1,
        grid: ".".repeat(width * height),

        value: function (x, y) {
            const position = x + y * this.width
            return this.grid.slice(position, position + 1)[0]
        },

        toString: function () {
            let ret = ""
            for (let i = 0; i < this.height; i++) {
                let rowStart = i * this.width
                ret += this.grid.slice(rowStart, rowStart + this.width)
                if (i < this.height - 1) {
                    ret += "\n"
                }
            }
            return ret
        }
    }
}

exports.textGrid = _textGrid

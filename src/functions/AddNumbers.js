const AddNumbers = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    matrix = matrix.map((row, rowIndex) => row.map((cell, colIndex) => {
        let top = true, bottom = true, start = true, end = true;
        if (cell === -1) return -1;
        let value = 0;
        if (rowIndex === 0) top = false;
        if (colIndex === 0) start = false;
        if ((rowIndex + 1) === rows) bottom = false;
        if ((colIndex + 1) === cols) end = false;
        if (start) value += matrix[rowIndex][colIndex - 1] === -1 ? 1 : 0;
        if (top) value += matrix[rowIndex - 1][colIndex] === -1 ? 1 : 0;
        if (start && top) value += matrix[rowIndex - 1][colIndex - 1] === -1 ? 1 : 0;
        if (top && end) value += matrix[rowIndex - 1][colIndex + 1] === -1 ? 1 : 0;
        if (end) value += matrix[rowIndex][colIndex + 1] === -1 ? 1 : 0;
        if (bottom) value += matrix[rowIndex + 1][colIndex] === -1 ? 1 : 0;
        if (start && bottom) value += matrix[rowIndex + 1][colIndex - 1] === -1 ? 1 : 0;
        if (end && bottom) value += matrix[rowIndex + 1][colIndex + 1] === -1 ? 1 : 0;
        return value;
    }))

    return matrix;
}

export default AddNumbers;
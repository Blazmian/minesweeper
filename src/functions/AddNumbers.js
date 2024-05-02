const AddNumbers = (matrix) => {
    const getNeighborOffsets = () => [
        [-1, -1], // Top-left
        [-1, 0],  // Top
        [-1, 1],  // Top-right
        [0, -1],  // Left
        [0, 1],   // Right
        [1, -1],  // Bottom-left
        [1, 0],   // Bottom
        [1, 1],   // Bottom-right
    ];

    const countAdjacentMines = (matrix, rowIndex, colIndex) => {
        const offsets = getNeighborOffsets();
        const rows = matrix.length;
        const cols = matrix[0].length;
        let count = 0;

        offsets.forEach(([rowOffset, colOffset]) => {
            const newRow = rowIndex + rowOffset;
            const newCol = colIndex + colOffset;
            if (
                newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                matrix[newRow][newCol].mine
            ) count++;
        });
        return count;
    };

    return matrix.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
            if (cell.mine) return { ...cell };
            const adjacentMines = countAdjacentMines(matrix, rowIndex, colIndex);
            return { ...cell, adjacentMines };
        })
    );
}

export default AddNumbers;
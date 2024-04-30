const PlaceMines = (matrix, numMines) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let minesPlaced = 0;

    while (minesPlaced < numMines) {
        const randomRow = Math.floor(Math.random() * rows);
        const randomCol = Math.floor(Math.random() * cols);

        if (matrix[randomRow][randomCol] !== -1) {
            matrix[randomRow][randomCol] = -1;
            minesPlaced++;
        }
    }

    return matrix;
};

export default PlaceMines;
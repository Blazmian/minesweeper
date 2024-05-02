const PlaceMines = (matrix, numMines) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let i = 0; i < numMines; i++) {
        let placed = false;
        while (!placed) {
            const row = Math.floor(Math.random() * rows);
            const col = Math.floor(Math.random() * cols);

            if (!matrix[row][col].mine) {
                matrix[row][col].mine = true;
                placed = true;
            }
        }
    }

    return matrix;
};

export default PlaceMines;
import Cell from "./Cell";

const Grid = ({ grid, setGrid, setMinesRemaining, gameInitialized, setGameInitialized, gameOver, setGameOver }) => {

    const openAdjacentCells = (grid, row, col, visited) => {
        const offsets = [
            [-1, -1], [-1, 0], [-1, 1],  // Top row
            [0, -1], [0, 1],   // Current row (left, right)
            [1, -1], [1, 0], [1, 1],     // Bottom row
        ];

        for (const [rowOffset, colOffset] of offsets) {
            const newRow = row + rowOffset;
            const newCol = col + colOffset;

            if (
                newRow >= 0 &&
                newRow < grid.length &&
                newCol >= 0 &&
                newCol < grid[0].length &&
                !visited[`${newRow}-${newCol}`] &&
                !grid[newRow][newCol].open
            ) {
                grid[newRow][newCol].open = true;
                visited[`${newRow}-${newCol}`] = true;

                if (grid[newRow][newCol].adjacentMines === 0) openAdjacentCells(grid, newRow, newCol, visited);
            }
        }
    };

    const openCell = (row, col) => {
        if (!gameInitialized) setGameInitialized(true);
        if (gameOver || grid[row][col].flagged) return;
        const newGrid = [...grid];
        newGrid[row][col].open = true;

        if (newGrid[row][col].mine) {
            setGameOver(true);
            alert("Boom! Has perdido.");
        } else if (newGrid[row][col].adjacentMines === 0) {
            const visited = {};
            openAdjacentCells(newGrid, row, col, visited);
        }
        setGrid(newGrid);
    };

    const flagCell = (row, col) => {
        const newGrid = [...grid];
        const isFlagged = newGrid[row][col].flagged;
        setMinesRemaining(prevState => {
            return isFlagged ? prevState + 1 : prevState - 1;
        })
        newGrid[row][col].flagged = !isFlagged;
        setGrid(newGrid);
    };

    return (
        <div>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            open={cell.open}
                            mine={cell.mine}
                            flagged={cell.flagged}
                            adjacentMines={cell.adjacentMines}
                            onClick={() => openCell(rowIndex, colIndex)}
                            onRightClick={() => flagCell(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Grid;
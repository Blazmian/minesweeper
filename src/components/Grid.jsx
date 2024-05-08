import Cell from "./Cell";
import GenerateMinesweeperGrid from "../functions/GenerateMinesweeperGrid";

const Grid = (props) => {

    const { grid, setGrid, rows, cols } = props;
    const { mines, setMinesRemaining, gameInitialized, setGameInitialized } = props;
    const { gameOver, setGameOver, gameWon, setGameWon } = props;
    const { handleMouseUp, handleMouseDown, handleBlur, onOpen } = props;

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
                !grid[newRow][newCol].open &&
                !grid[newRow][newCol].flagged
            ) {
                grid[newRow][newCol].open = true;
                visited[`${newRow}-${newCol}`] = true;

                if (grid[newRow][newCol].adjacentMines === 0) openAdjacentCells(grid, newRow, newCol, visited);
            }
        }
    };

    const openCell = (row, col) => {
        let newGrid = [...grid];
        let cell = newGrid[row][col];

        if (gameOver || cell.flagged || gameWon) return;

        while (!gameInitialized && cell.mine) {
            newGrid = GenerateMinesweeperGrid(rows, cols, mines);
            cell = newGrid[row][col];
        }
        if (!gameInitialized) {
            setGrid(newGrid);
            setGameInitialized(true);
        }

        cell.open = true;
        if (cell.mine) {
            setGameOver(true);
            onOpen();
            //alert("Boom! Has perdido.");
        } else if (cell.adjacentMines === 0) {
            const visited = {};
            openAdjacentCells(newGrid, row, col, visited);
        }
        setGrid(newGrid);
        checkIfWon(newGrid);
    };

    const flagCell = (row, col) => {
        if (gameOver || gameWon) return;
        setGameInitialized(true);
        const newGrid = [...grid];
        const isFlagged = newGrid[row][col].flagged;
        setMinesRemaining(prevState => {
            return isFlagged ? prevState + 1 : prevState - 1;
        })
        newGrid[row][col].flagged = !isFlagged;
        setGrid(newGrid);
    };

    const checkIfWon = async (grid) => {
        const totalSafeCells = (rows * cols) - mines;
        let totalOpen = 0;
        grid.map(row => totalOpen += row.filter(cell => cell.open && !cell.mine).length)
        if (totalOpen !== totalSafeCells) return;
        setGameWon(true);

        onOpen("won");
        //alert("¡¡Has ganado!!");
    }

    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onBlur={handleBlur}
        >
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            open={cell.open}
                            mine={cell.mine}
                            gameOver={gameOver}
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
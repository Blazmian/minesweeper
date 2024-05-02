import Cell from "./Cell";

const Grid = ({ grid, setGrid, setMinesRemaining }) => {

    const openCell = (row, col) => {
        if (grid[row][col].flagged) return;
        const newGrid = [...grid];
        newGrid[row][col].open = true;

        if (newGrid[row][col].mine) alert("Boom! Has perdido.");
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
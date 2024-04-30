import Cell from "./Cell";

const Grid = ({ matrix = [], firstPressed, setFirstPressed, regenerateGrid, setMinesRemaining }) => {
    return (
        <div>
            {matrix && matrix.map((row, rowIndex) => (
                <div className="flex" key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <Cell key={`${rowIndex}-${colIndex}`} value={cell} {...{ regenerateGrid, firstPressed, setFirstPressed, setMinesRemaining }} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Grid;
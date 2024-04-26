import Matrix from "../functions/Matrix";
import Cell from "./Cell";

const Grid = ({ cols, rows, mines }) => {
    const matrix = Matrix(cols, rows);

    return (
        <div>
            {matrix.map(row => (
                <div className="flex">
                    {row.map(col => (
                        <Cell />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Grid;
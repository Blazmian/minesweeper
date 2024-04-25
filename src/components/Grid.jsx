import React from "react";
import Cell from "./Cell";

const Grid = ({ cols, rows, mines }) => {
    return (
        <div className="flex">
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    {Array.from({ length: cols }).map((_, colIndex) => (
                        <Cell key={`${rowIndex}-${colIndex}`} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Grid;
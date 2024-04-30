import { useState } from "react";

const Cell = ({ value, firstPressed, setFirstPressed, regenerateGrid, setMinesRemaining }) => {

    const [open, setOpen] = useState(false);
    const [mineDetected, setMineDetected] = useState(false);

    const cellClass = open ? "cursor-default" : mineDetected ? "bg-gray-700 cursor-default" : 'bg-gray-700 hover:shadow-gray-400 cursor-pointer';

    const onClick = () => {
        if (mineDetected) return;
        if (firstPressed === false && value === -1) {
            regenerateGrid();
        }
        setFirstPressed(true);
        setOpen(true);
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        if (mineDetected) {
            setMinesRemaining(prevState => prevState + 1);
        } else {
            setMinesRemaining(prevState => prevState - 1);
        }
        setMineDetected(prevState => !prevState);
    };

    return (
        <button
            className={`h-10 w-10 transition-all duration-150 shadow-inner shadow-gray-800 ${cellClass}`}
            onClick={onClick}
            onContextMenu={handleRightClick}
        >
            {open && (value === -1 ? "💣" : value)}
            {mineDetected && "🚩"}
        </button>
    );
};

export default Cell;
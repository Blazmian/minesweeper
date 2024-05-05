const Cell = ({ open, flagged, mine, gameOver, adjacentMines, onClick, onRightClick }) => {

    const colorText = (adjacentMines) => {
        const colorMap = {
            1: "text-blue-700",
            2: "text-green-700",
            3: "text-red-500",
            4: "text-indigo-900",
            5: "text-red-900",
            6: "text-cyan-500",
            7: "text-black",
            8: "text-gray-500",
        };
        return colorMap[adjacentMines] || "text-black";
    };

    const getCellClass = () => {
        if (flagged) {
            if (gameOver) return mine ? "bg-gray-700" : "bg-gray-400";
            return "bg-gray-700";
        }
        if (open) {
            if (mine) return "bg-red-600";
            return `bg-gray-400 ${colorText(adjacentMines)}`;
        }
        if (gameOver && mine) return "bg-gray-400";
        return "bg-gray-700 hover:shadow-gray-400 cursor-pointer";
    };


    const cellClass = `h-8 w-8 font-bold duration-150 shadow-inner flex items-center justify-center select-none shadow-gray-800 ${getCellClass()}`;

    const handleRightClick = (e) => {
        e.preventDefault();
        if (open) return;
        onRightClick();
    };

    return (
        <div
            className={cellClass}
            onClick={onClick}
            onContextMenu={handleRightClick}
        >
            {flagged && gameOver && !mine ? '❌' : flagged ? '🚩' : ''}
            {open
                ? (mine
                    ? "💣"
                    : adjacentMines !== 0
                        ? adjacentMines
                        : "")
                : gameOver
                && mine
                && !flagged
                && "💣"
            }
        </div>
    );
};

export default Cell;
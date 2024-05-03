const Cell = ({ open, flagged, mine, adjacentMines, onClick, onRightClick }) => {

    const cellClass = `h-8 w-8 transition-all duration-150 shadow-inner flex items-center justify-center shadow-gray-800  cursor-default ${flagged
        ? "bg-gray-700"
        : open
            ? mine
                ? 'bg-red-600'
                : "bg-gray-400"
            : 'bg-gray-700 hover:shadow-gray-400 cursor-pointer'
        }`;

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
            {flagged && '🚩'}
            {open && (mine ? "💣" : adjacentMines !== 0 ? adjacentMines : " ")}
        </div>
    );
};

export default Cell;
const Cell = ({ open, flagged, mine, adjacentMines, onClick, onRightClick }) => {

    const colorText = (adjacentMines) => {
        let color = "";
        switch (adjacentMines) {
            case 1:
                color = "text-blue-700";
                break;
            case 2:
                color = "text-green-700";
                break;
            case 3:
                color = "text-red-500";
                break;
            case 4:
                color = "text-indigo-900";
                break;
            case 5:
                color = "text-red-900";
                break;
            case 6:
                color = "text-cyan-500";
                break;
            case 7:
                color = "text-black";
                break;
            case 8:
                color = "text-gray-500";
                break;
            default:
                color = "text-black";
                break;
        }
        return color;
    };

    const cellClass = `h-8 w-8 font-bold duration-150 shadow-inner flex items-center justify-center shadow-gray-800 cursor-default ${flagged
        ? "bg-gray-700"
        : open
            ? mine
                ? 'bg-red-600'
                : `bg-gray-400 ${colorText(adjacentMines)}`
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
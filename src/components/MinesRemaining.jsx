const MinesRemaining = ({ mines, className = "", style }) => {

    const formattedMines = String(mines).padStart(3, '0');

    return (
        <p className={className} style={style}>
            {formattedMines}
        </p>
    );
};

export default MinesRemaining;
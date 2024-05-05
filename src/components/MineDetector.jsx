const MineDetector = ({ gameWon, gameOver, clicking }) => {

    const getEmoji = () => {
        if (gameWon) return "😎";
        if (gameOver) return "😵";
        if (clicking) return "😮";
        return "😃";
    }

    return <>{getEmoji()}</>
}

export default MineDetector;
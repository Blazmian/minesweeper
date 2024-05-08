import { useEffect, useRef } from "react";

const Timer = ({ time = 0, setTime, className = "", style, started, gameOver, gameWon }) => {
    const maxTime = 999;
    const intervalRef = useRef(null);

    useEffect(() => {
        if (started) {
            if (gameOver || gameWon) return () => clearInterval(intervalRef.current);
            if (time < maxTime) intervalRef.current = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime < maxTime) {
                        return prevTime + 1;
                    } else {
                        clearInterval(intervalRef.current);
                        return prevTime;
                    }
                });
            }, 1000);
            return () => clearInterval(intervalRef.current);
        } else {
            setTime(0);
        }
        // eslint-disable-next-line
    }, [started, gameOver, gameWon]);

    const formattedTime = String(time).padStart(3, '0');

    return (
        <p className={className} style={style}>
            {formattedTime}
        </p>
    );
};

export default Timer;
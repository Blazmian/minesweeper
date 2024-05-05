import { useEffect, useRef, useState } from "react";

const Timer = ({ className = "", style, started, gameOver, gameWon }) => {
    const [time, setTime] = useState(0);
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
    }, [started, gameOver]);

    const formattedTime = String(time).padStart(3, '0');

    return (
        <p className={className} style={style}>
            {formattedTime}
        </p>
    );
};

export default Timer;
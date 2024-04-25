import { useEffect, useRef, useState } from "react";

const Timer = ({ className = "", style }) => {
    const [time, setTime] = useState(0);
    const maxTime = 999;
    const intervalRef = useRef(null);

    useEffect(() => {
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
        // eslint-disable-next-line
    }, []);

    const formattedTime = String(time).padStart(3, '0');

    return (
        <p className={className} style={style}>
            {formattedTime}
        </p>
    );
};

export default Timer;
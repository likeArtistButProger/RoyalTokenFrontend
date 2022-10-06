import { useEffect, useState } from "react";
import moment from "moment";

const useTimer = (startTimeSeconds, endTimeSeconds, stepSeconds) => {
    const [duration, setDuration] = useState(endTimeSeconds - startTimeSeconds);
    const [timeFormatted, setTimeFormatted] = useState("0 0 0 0")

    useEffect(() => {
        setDuration(endTimeSeconds - startTimeSeconds);
    }, [startTimeSeconds, endTimeSeconds]);
    
    useEffect(() => {
        if(duration > 0) {
            const interval = setInterval(() => {
                setDuration(prev => prev - stepSeconds);
            }, stepSeconds * 1000);

            const durationObj = moment.duration(duration, "seconds");

            // const seconds = duration % 60;
            // const minutes = ((duration - seconds) / 60) % 60;
            // const hours   = (((duration - seconds) / 60) - minutes) % 24
            // const days    = ((((duration - seconds) / 60) - minutes) - hours) / 24

            setTimeFormatted(`${durationObj.days()}d ${durationObj.hours()}h ${durationObj.minutes()}m ${durationObj.seconds()}s`);

            return () => {
                clearInterval(interval);
            }
        } else {
            setTimeFormatted(`0 0 0 0`);
        }
    }, [duration, stepSeconds]);

    // useEffect(() => {
    //     setDuration(moment.duration(endTimeSeconds - startTimeSeconds, "seconds"));
    // }, [startTimeSeconds, endTimeSeconds]);

    // useEffect(() => {

    //     if(duration) {
    //         console.log("BEFORE INTERVAL");
    //         const interval = setInterval(() => {
    //             const dur = duration.subtract(stepSeconds, "seconds");

    //             console.log(dur.seconds());
    //             setDuration(dur)
    //         }, stepSeconds * 1000);

    //         return () => {
    //             clearInterval(interval);
    //         }
    //     }
    // }, [duration, stepSeconds]);

    return {
        timeFormatted
    }
};

export {
    useTimer
}
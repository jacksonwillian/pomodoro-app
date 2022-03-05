
import "./styles.css";

function DisplayApp({time}) { 

    function getMinutesTime(): string {
        let minutesTime =  Math.floor(time.seconds / 60);
        return minutesTime.toString().padStart(2, "0");
    }

    function getSecondsTime(): string {
        let secondsTime = Math.floor(time.seconds % 60);
        return secondsTime.toString().padStart(2, "0");
    } 

    return <h1 className="display">{getMinutesTime()}:{getSecondsTime()}</h1>;
}

export default DisplayApp;
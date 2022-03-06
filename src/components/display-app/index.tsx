import "./styles.css";


function DisplayApp(props) {

    function getMinutesTime(): string {
        let minutesTime =  Math.floor(props.seconds / 60);
        return minutesTime.toString().padStart(2, "0");
    }

    function getSecondsTime(): string {
        let secondsTime = Math.floor(props.seconds % 60);
        return secondsTime.toString().padStart(2, "0");
    } 

    return (
        <div style={props.style} onClick={props.onClick} className="display">
            <span className="digit">{getMinutesTime()}</span>
            :
            <span className="digit">{getSecondsTime()}</span>
        </div>
    );
}

export default DisplayApp;
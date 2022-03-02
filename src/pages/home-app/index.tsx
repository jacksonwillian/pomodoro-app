import { useEffect, useState } from "react";
import ButtonApp from "../../components/button-app/index.tsx";
import DisplayApp from "../../components/display-app/index.tsx";

const INITIAL_TIME_SECONDS = 25 * 60;

function HomeApp() {

    const [seconds, setSeconds] = useState(INITIAL_TIME_SECONDS);
    const [paused, setPaused] = useState(true);

    function getMinutesTime(): string {
        let minutesTime =  Math.floor(seconds / 60);
        return minutesTime.toString().padStart(2, "0");
    }

    function getSecondsTime(): string {
        let secondsTime = Math.floor(seconds % 60);
        return secondsTime.toString().padStart(2, "0");
    } 

    function start(): void {
        console.log("press Start");
        if(seconds !== INITIAL_TIME_SECONDS) {
            setPaused(true);
            setSeconds(INITIAL_TIME_SECONDS);
        } else {
            setSeconds(INITIAL_TIME_SECONDS);
        }
        setPaused(state => !state);
        
    }

    function pause(): void {
        setPaused(state => !state);
    }

    useEffect(() => {
        if(paused === false) {
            setTimeout(
                () => {
                    setSeconds(state => state - 1);
                }, 
                1000,
            );
        }
    }, [seconds, paused]);

    return (
        <>
            <h1>Pomodoro App</h1>
            <DisplayApp time = {{ minutes: getMinutesTime(), seconds: getSecondsTime() }} />
            <ButtonApp onClick = {() => {start();}} name={(INITIAL_TIME_SECONDS === seconds)? "Iniciar" : "Reiniciar"}/>
            <ButtonApp onClick = {() => {pause();}} name={paused? "Retomar": "Pausar"}/>
        </>
    );

}

export default HomeApp;
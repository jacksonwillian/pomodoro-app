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
        if(seconds === INITIAL_TIME_SECONDS) {
            setPaused(false);
        } else {
            setSeconds(INITIAL_TIME_SECONDS);
            setPaused(true);
        }            
    }

    function pause(): void {
        setPaused(state => !state);
    }

    useEffect(() => {
        var timeOut = setTimeout(
            () => {
                setSeconds(state => state - 1);
            }, 
            1000,
        );
        if(paused === true) {
            clearTimeout(timeOut);
        }
        return () => {
            clearTimeout(timeOut);
        };
    }, [seconds, paused]);

    return (
        <>
            <h1>Pomodoro App</h1>
            <DisplayApp time = {{ minutes: getMinutesTime(), seconds: getSecondsTime() }} />
            <ButtonApp onClick = {() => {start();}} name={(INITIAL_TIME_SECONDS === seconds)? "Iniciar" : "Parar"}/>
            <ButtonApp onClick = {() => {pause();}} name={paused? "Retomar": "Pausar"}/>
        </>
    );

}

export default HomeApp;
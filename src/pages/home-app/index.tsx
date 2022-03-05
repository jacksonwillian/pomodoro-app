import { useEffect, useState } from "react";

import ButtonApp from "../../components/button-app/index.tsx";
import DisplayApp from "../../components/display-app/index.tsx";

import sound from '../../assets/beep-472.mp3';
import sound2 from '../../assets/long-dang-168.mp3';

const INITIAL_TIME_SECONDS = 25 * 60;

function HomeApp() {

    const [seconds, setSeconds] = useState(INITIAL_TIME_SECONDS);
    const [paused, setPaused] = useState(true);


    function start(): void {
        if(seconds === INITIAL_TIME_SECONDS) {
            setPaused(false);
        } else {
            setPaused(true);
            setSeconds(INITIAL_TIME_SECONDS);
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

        if (seconds <= 5) {
            new Audio(sound).play();
        }

        if (seconds === 0) {
            new Audio(sound2).play();
            setPaused(true);
            setSeconds(INITIAL_TIME_SECONDS);
        }
        return () => {
            clearTimeout(timeOut);
        };
    }, [seconds, paused]);

    
    return (
        <>
            <h1>Pomodoro App</h1>

            <DisplayApp time = {{seconds}} />
            <ButtonApp onClick = {() => {start();}} name={(INITIAL_TIME_SECONDS === seconds)? "Iniciar" : "Parar"}/>
            <ButtonApp onClick = {() => {pause();}} name={paused? "Retomar": "Pausar"}/>

            <footer>
                Sounds from <a href="https://notificationsounds.com/" target="_blank">Notification Sounds</a>.
            </footer>
            
        </>
    );

}

export default HomeApp;
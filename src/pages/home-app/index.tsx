import { useEffect, useRef, useState } from "react";

import { BsFillPauseFill, BsPlayFill, BsFillStopFill} from "react-icons/bs";

import DisplayApp from "../../components/display-app/index.tsx";
import DisplayEditorApp from "../../components/display-editor-app/index.tsx";

import "../../styles.css";
import sound from '../../assets/beep-472.mp3';
import sound2 from '../../assets/long-dang-168.mp3';

var INITIAL_TIME_SECONDS = 10;

function HomeApp() {

    const [seconds, setSeconds] = useState(INITIAL_TIME_SECONDS);
    const [paused, setPaused] = useState(true);
    const [editingMode, setEditingMode] = useState(false);
    let newSeconds: number = 0;

    const _sound = useRef(new Audio(sound));
    const _sound2 = useRef(new Audio(sound2));

    function start(): void {
        setPaused(state => !state);    
    }

    function stop(): void {
        setPaused(true);
        setSeconds(INITIAL_TIME_SECONDS);
    }

    function editingSeconds(value: number) {
        newSeconds = value;
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
            _sound.current.play();
        }

        if (seconds === 0) {
            _sound2.current.play();
            stop();
        }
        return () => {
            clearTimeout(timeOut);
        };
    }, [seconds, paused]);

    
    return (
        <>
            <h1>Pomodoro App</h1>
            <div className="content-center tomate">
            <span className="branch"></span>
            <span className="login_leaf_class leaf_left"></span>
            <span className="login_leaf_class leaf_right"></span>
            <span className="login_leaf_class leaf_center"></span>

            <DisplayApp 
                style={{display: editingMode? "none": "flex"}}
                onClick={()=> {setEditingMode(true); setPaused(true);}} 
                seconds = {seconds}
            />
            
            <DisplayEditorApp 
                onEdit={(value: number) => editingSeconds(value)}
                style={{display: editingMode? "flex": "none"}}
            />

            <div>
                <span 
                    className="button" 
                    onClick = {() => {
                        setEditingMode(false);
                        if(newSeconds !== 0) {
                            INITIAL_TIME_SECONDS = newSeconds;
                            setSeconds(INITIAL_TIME_SECONDS);
                        } 
                        start();
                    }} 
                > 
                    {paused? <BsPlayFill /> : <BsFillPauseFill /> }
                </span>

                <span 
                    className="button" 
                    onClick = {() => stop()} 
                > 
                    <BsFillStopFill /> 
                </span> 
            </div>
            </div> 

            <footer className="footer">
                Sounds from <a href="https://notificationsounds.com/" target="_blank" rel="noreferrer">Notification Sounds</a>.
            </footer>
        </>

    );

}

export default HomeApp;

function DisplayApp(props) {    
    
    const {minutes, seconds} = props.time;

    return <h1>{minutes}:{seconds}</h1>;
}

export default DisplayApp;
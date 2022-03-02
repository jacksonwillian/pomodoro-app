function ButtonApp(props) {
    return <button onClick={props.onClick}>{props.name}</button>;
}

export default ButtonApp;
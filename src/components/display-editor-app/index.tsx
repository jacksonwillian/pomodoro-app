
import "./styles.css";
import {SelectApp, Options} from "../select-app/index.tsx";

const digitsOptions: Options[] = [...Array(60)].map((_, i) => new Options(i.toString().padStart(2, "0"), i));

function DisplayEditorApp(props) {

    let totalSeconds: number = 0;

    let minutes: number = 0;    
    let seconds: number = 0;

    function update() {
        let totalSeconds = 0;
        totalSeconds += seconds;
        totalSeconds += (minutes * 60);
        props.onEdit(totalSeconds);
    }

    return (
        <div style={props.style} className="display">
            <SelectApp options={digitsOptions} onChanged={(value:number) => {minutes = Number(value); update();} } />
            :
            <SelectApp options={digitsOptions} onChanged={(value:number) => {seconds = Number(value); update();}} />
        </div>
    );
}

export default DisplayEditorApp;
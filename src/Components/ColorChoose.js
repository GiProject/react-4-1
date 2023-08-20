import { useState, useRef } from "react";

export default function ColorChoose() {

    const initialState = "#33495F";
    const [input, setInput] = useState("#33495F");
    let bgColor = useRef(null);
    let rgbValue = useRef(hexValidate(initialState) ? hexToRgb(initialState) : 'Ошибка!');

    const handleChoose = ({ target }) => {
        setInput(target.value);
    }

    if (input.length >= 7) {
        if (hexValidate(input)) {
            bgColor.current = input;
            rgbValue.current = hexToRgb(input)
        } else {
            bgColor.current = '#E94B35';
            rgbValue.current = 'Ошибка!';
        }
    }

    return <div className="block" style={{backgroundColor: bgColor.current}}>
        <div className="input-group"> 
            <input onChange={handleChoose} value={input} />
            <input disabled value={rgbValue.current} />
        </div>        
    </div>
}

function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? 'rgb(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) +  ', ' + parseInt(result[3], 16) + ')' : null;
}

function hexValidate(hex) {
    return /^#[0-9A-F]{6}$/i.test(hex)
}

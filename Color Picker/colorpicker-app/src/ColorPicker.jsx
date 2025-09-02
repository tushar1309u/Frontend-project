import React,{useState} from "react";
function ColorPicker(){
    const[color,setColor]=useState("#ffffff");

    function handleColorChange(ev){
        return setColor(ev.target.value);
    };

    return(
        <div className="color-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p>Color Code:{color}</p>

            </div>
            <label >Select a color</label>
            <input type="color" onChange={handleColorChange} />

        </div>
    );

}
export default ColorPicker;
// import st from './style.module.scss'
import {useState} from "react";
export default function CheckBox(props) {
    const [checked, setChecked] = useState(props.checked || false);
    const handleChange = () => {
        setChecked(!checked);
    };
    
    return (
    <div className="checkbox">
        <label>
            <input
            type="checkbox"
            className="checkbox__input"
            checked={checked}
            onChange={handleChange}
            />
            <span
            className="checkbox__span"
            />
        </label>
    </div>
    )  
}

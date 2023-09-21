import { useEffect, useRef, useState } from "react";
import st from './style.module.scss'

export default function NewRow() {
    const [value, setValue] = useState (''); // Состояние сохранения вэлью инпута
    const handleChange = (e) => {
        setValue (e.target.value);
    }

    const inpRef = useRef ();
    useEffect(() => {
        inpRef.current.focus();
    },[])

    const handlePlusWord = () => {

    }

    const handleCanselBack = () => {
        setValue (!value);
    }

    return (
        <div className={st.table__row}>
            <input ref={inpRef} className={st.table__row_english} type="text" placeholder='english' value={value} onChange={handleChange}></input>
            <input className={st.table__row_transcription} type="text" placeholder='transcription' ></input>
            <input className={st.table__row_russian} type="text" placeholder='russian'></input>
            <input className={st.table__row_theme} type="text" placeholder='theme'></input>
            <div className={st.table__row_buttonList}>
                <button className={st.btnSave} onClick={handlePlusWord}>Добавить слово</button> 
                {value && <button className={st.btnSave} onClick={handleCanselBack}>Отмена</button>}
            </div>
        </div>
    )
}


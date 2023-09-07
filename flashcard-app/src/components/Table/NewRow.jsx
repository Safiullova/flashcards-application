import { useState } from "react";
import st from './style.module.scss'

export default function NewRow() {
    const [clickPlus, setClickPlus] = useState (false); // Состояние для удаления строки
    const handlePlusWord = () => {
        setClickPlus (!clickPlus)
    }

    return (
        <div className={st.table__row}>
            <input className={st.table__row_english} type="text" placeholder='english' defaultValue={clickPlus && '123'}></input>
            <input className={st.table__row_transcription} type="text" placeholder='transcription'></input>
            <input className={st.table__row_russian} type="text" placeholder='russian'></input>
            <input className={st.table__row_theme} type="text" placeholder='theme'></input>
            <div className={st.table__row_buttonList}>
                <button className={st.btnSave} onClick={handlePlusWord}>Добавить слово</button> 
            </div>
        </div>
    )
}

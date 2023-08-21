import {useState} from "react";
import CheckBox from './CheckBox'
import st from './style.module.scss'

export default function Table(props) {
  const [clickDel, setClickDel] = useState (false); // Состояние для удаления строки
    const handleClickDel = () => {
        setClickDel (!clickDel)
    }

    const [clickEdit, setClickEdit] = useState (false); // Состояние для редактирования строки
    // const [row, setRow] = useState (st.table__row); // Состояние для редактирования строки
    // const handleRow = () => {
        
    const handleClickEdit = () => {
        setClickEdit (!clickEdit)
        // setRow (st.selected)
    }

    const [clickSave, setClickSave] = useState (false); // Состояние для сохранения редактирования строки
    const handleClickSave = () => {
        setClickSave (!clickSave)
        
    }
    // let inputWord = props.english

    const [clickCancel, setClickCancel] = useState (false); // Состояние для отмены редактирования
    const handleClickCancel = () => {
        setClickCancel (!clickCancel)
    } 

    return (
    <div className={st.table}>
      {!clickDel && <div className={!clickEdit? st.table__row : `${st.table__row} ${st.selected}`}> 
        <div className={st.table__row_number}>
          <CheckBox></CheckBox>
        </div>
        {!clickEdit?<div className={st.table__row_english}>{props.english}</div> : 
        <div className={st.table__row_english}><input type="text" value={props.english}></input></div>}
        <div className={st.table__row_transcription}>{props.transcription}</div>
        <div className={st.table__row_russian}>{props.russian}</div>
        <div className={st.table__row_theme}>
        <CheckBox></CheckBox>
        Тема</div>
        <div className={st.table__row_buttonList}>
         {/* <button className={st.btnEdit} onClick={handleClickEdit}> {!clickEdit ? 'Редактировать': 'Отмена'}</button> */}
          {!clickEdit ? <button className={st.btnEdit} onClick={handleClickEdit}> Редактировать</button> : <button className={st.btnCancel} onClick={handleClickCancel}>Отмена</button>}
          {clickEdit && <button className={st.btnSave} onClick={handleClickSave}>Сохранить</button> }
          
          <button className={st.btnDeleted} onClick={handleClickDel}>Удалить</button>

        </div>
      </div>}
    </div>
  )
}

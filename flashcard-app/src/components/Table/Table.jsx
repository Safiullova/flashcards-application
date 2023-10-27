import {useState, useEffect} from "react";
import st from './style.module.scss';
import PUT from "../../services/PUT";
import Icon_del from "../../images/icons/delete.svg";
import Icon_edit from "../../images/icons/edit.svg";
import Icon_save from "../../images/icons/ok.png";
import Icon_nok from "../../images/icons/nok.png";

export default function Table(props) {
  const [valueEn, setValueEn] = useState(''); // Состояние input англ слова
    const [valueTr, setValueTr] = useState(''); // Состояние input транскрипция
    const [valueRu, setValueRu] = useState(''); // Состояние input перевод
    const [valueTh, setValueTh] = useState(''); // Состояние input тема
    const {flag, setFlag} = props;
  
    const [clickEdit, setClickEdit] = useState (false); // Состояние для редактирования строки
    const handleClickEdit = () => {
        setClickEdit (!clickEdit);
    }

    // для сохранения редактирования строки
    async function clickSave() {
      const id = props.id
      const newWord = {
        english: valueEn,
        transcription: valueTr,
        russian: valueRu,
        tags: valueTh,
        tags_json: "[]"
    };
    console.log(id);
    console.log(newWord);

      await PUT.putWord (id, newWord);
      setClickEdit (!clickEdit);
      setFlag(!flag); 
  }

    const [clickCancel, setClickCancel] = useState (false); // Состояние для отмены редактирования
    const handleClickCancel = () => {
        setClickCancel (!clickCancel);
        setClickEdit (!clickEdit)
    } ;

    useEffect(() => {
      setValueEn(props.english)
      setValueTr(props.transcription)
      setValueRu(props.russian)
      setValueTh(props.theme)
  }, [props]);
  
  const handleChange = (e) => {
    if (e.target.name === 'english') {
        setValueEn(e.target.value.trim());}
            if (e.target.name === 'transcription')
                {setValueTr(e.target.value.trim().toLowerCase());}
                if (e.target.name === 'russian')
                    {setValueRu(e.target.value.trim());}
                        if (e.target.name === 'theme')
                            {setValueTh(e.target.value.trim().toLowerCase());}
};

    return (
    <div className={st.table}>
      {<div className={!clickEdit? st.table__row : `${st.table__row} ${st.selected}`}> 
        {!clickEdit?
        <><div className={st.table__row_input}>{props.english}</div>
          <div className={st.table__row_input}>{props.transcription}</div>
          <div className={st.table__row_input}>{props.russian}</div>
          <div className={st.table__row_input}>{props.theme}</div>
          
          <div className={st.table__row_buttonList}>
          <img src={Icon_edit } alt="edit"  className={st.btnEdit} onClick={handleClickEdit} /> {/*Иконка-кнопка для редактирования слова*/}
          {/* <button className={st.btnEdit} onClick={handleClickEdit} > Редактировать</button> */}
          <img src={Icon_del } alt="delete" className={st.btnDeleted} onClick={() => props.deleteRow(props.id)}/> {/*Иконка-кнопка для удаления слова*/}
          </div>
        </> :
        <>
          <input className={`${st.table__row_input} ${st.selected}`} type="text" value={valueEn} onChange={handleChange} name='english'></input>
          <input className={`${st.table__row_input} ${st.selected}`} type="text" value={valueTr} onChange={handleChange} name='transcription'></input>
          <input className={`${st.table__row_input} ${st.selected}`} type="text"  value={valueRu} onChange={handleChange} name="russian"></input>
          <input className={`${st.table__row_input} ${st.selected}`} type="text"  value={valueTh} onChange={handleChange} name="theme"></input>
          <div className={st.table__row_buttonList}>
          {/* <button className={st.btnSave} onClick={clickSave}>Сохранить</button>  */}
          <img src={Icon_save} alt="save"  className={st.btnIcon} onClick={clickSave}/> 
            {/* <button className={st.btnCancel} onClick={handleClickCancel}>Отмена</button> */}
            <img src={Icon_nok} alt="delete"  className={st.btnIcon} onClick={handleClickCancel}/>
          </div>
        </>}
      </div>}
    </div>
  )
}

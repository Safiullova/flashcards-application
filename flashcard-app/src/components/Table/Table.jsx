import {useState, useEffect} from "react";
import st from './style.module.scss';
import PUT from "../../services/PUT";

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
          <button className={st.btnEdit} onClick={handleClickEdit} > Редактировать</button>
          <button className={st.btnDeleted} onClick={() => props.deleteRow(props.id)}>Удалить</button>
          </div>
        </> :
        <>
          <input className={st.table__row_input} type="text" defaultValue={props.english} value={valueEn} onChange={handleChange} name='english'></input>
          <input className={st.table__row_input} type="text" defaultValue={props.transcription} value={valueTr} onChange={handleChange} name='transcription'></input>
          <input className={st.table__row_input} type="text" defaultValue={props.russian} value={valueRu} onChange={handleChange} name="russian"></input>
          <input className={st.table__row_input} type="text" defaultValue={props.theme} value={valueTh} onChange={handleChange} name="theme"></input>
          <div className={st.table__row_buttonList}>
            <button className={st.btnCancel} onClick={handleClickCancel}>Отмена</button>
            <button className={st.btnSave} onClick={clickSave}>Сохранить</button> 
          </div>
        </>}
      </div>}
    </div>
  )
}

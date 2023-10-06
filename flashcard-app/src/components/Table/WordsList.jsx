import { useEffect, useRef, useState } from "react";

import Table from './Table'
import st from './style.module.scss'
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import POST from "../../services/POST";
import DEL from "../../services/DEL";
import PUT from "../../services/PUT";

export default function WordsList() {

    const {words, flag, setFlag} = useContext(MyContext); // Массив с карточками\словами
    console.log(words);
    const [valueEn, setValueEn] = useState(''); // Состояние input англ слова
    const [valueTr, setValueTr] = useState(''); // Состояние input транскрипция
    const [valueRu, setValueRu] = useState(''); // Состояние input перевод
    const [valueTh, setValueTh] = useState(''); // Состояние input тема

    const handleChange = (e) => {
        if (e.target.name === 'newEnglish') {
            setValueEn(e.target.value.trim());}
                if (e.target.name === 'newTranscription')
                    {setValueTr(e.target.value.trim().toLowerCase());}
                    if (e.target.name === 'newRussian')
                        {setValueRu(e.target.value.trim());}
                            if (e.target.name === 'newTheme')
                                {setValueTh(e.target.value.trim().toLowerCase());}
    };

    const handleCanselBack = () => {
        setValueEn ('');
        setValueTr ('');
        setValueRu ('');
        setValueTh ('');
    }

    const inpRef = useRef ();
    
    useEffect(() => {
        inpRef.current.focus();
        },[]);
    
        async function handleAddWord ()  {
        if (valueEn.trim() !== '' ||
            valueTr.trim() !== '' ||
            valueRu.trim() !== '' 
            ||
            valueTh.trim() !== ''
        ) {
            const newWord = {
                english: valueEn,
                transcription: valueTr,
                russian: valueRu,
                tags: valueTh,
                tags_json: "[\"\"]"
            };
            await POST.postWord(newWord);
            setValueEn('');
            setValueRu('');
            setValueTh('');
            setValueTr('');
            setFlag(!flag)
        }
    };

    async function deleteRow(id) {
        await DEL.delWord(id);
        setFlag(!flag)
    };

    async function editRow (id, props) {
await PUT.putWord (id, props);
setFlag(!flag)
    };

    if (!words) {
        return <h1>Loading...</h1>;
    };

    return (
        <div className={st.container}>
            <div className={st.table__row}>
            <input ref={inpRef} className={st.table__row_input} type="text" placeholder='english' name='newEnglish' value={valueEn} onChange={handleChange}></input>
            <input className={st.table__row_input} type="text" placeholder='transcription' name='newTranscription' value={valueTr} onChange={handleChange} ></input>
            <input className={st.table__row_input} type="text" placeholder='russian' name='newRussian' value={valueRu} onChange={handleChange}></input>
            <input className={st.table__row_input} type="text" placeholder='theme' name='newTheme'value={valueTh} onChange={handleChange}></input>
                <div className={st.table__row_buttonList}>
                    <button className={st.btnSave} onClick={handleAddWord} >Добавить слово</button> 
                    {valueEn ||valueRu || valueTh || valueTr ? <button className={st.btnSave} onClick={handleCanselBack}>Отмена</button> : ''}
                </div>
            </div>
        <br></br>
            {words.map((word)=> (
                <Table className={st.table}
                    key={word.id}
                    english={word.english}
                    transcription={word.transcription}
                    russian={word.russian}
                    theme={word.tags}
                    deleteRow={deleteRow}
                    editRow={editRow}
                    id={word.id}
                    flag={flag}
                    setFlag={setFlag}
                />
            ))} 
        </div>
    )
}

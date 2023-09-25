import { useEffect, useRef, useState } from "react";
import cards from '../data/words.json'
// import NewRow from './NewRow'
import Table from './Table'
import st from './style.module.scss'

export default function WordsList() {

    const [words, setWords] = useState(cards); // Массив с карточками\словами
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
        },[])
    
    const handleAddWord = () => {
        if (valueEn.trim() !== '' ||
            valueTr.trim() !== '' ||
            valueRu.trim() !== '' ||
            valueTh.trim() !== ''
        ) {
            const newWord = {
                id: Date.now(),
                english: valueEn,
                transcription: valueTr,
                russian: valueRu,
                tags: valueTh,
            };
            setWords([ newWord, ...words]);
            setValueEn('');
            setValueRu('');
            setValueTh('');
            setValueTr('')
        }
    };

    function deleteRow(id) {
        const arrData = [...words];
        arrData.splice(id, 1);
        setWords(arrData);
    }
    function editRow(english, transcription, russian, tags, id) {
        const updatedWords = words.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    english,
                    transcription,
                    russian,
                    tags
                };
            }
            return item;
        });
        setWords(updatedWords);
    }

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
            {words.map((word, index)=> (
                <Table className={st.table}
                    key={word.id}
                    english={word.english}
                    transcription={word.transcription}
                    russian={word.russian}
                    index={index}
                    theme={word.tags}
                    deleteRow={deleteRow}
                    editRow={editRow}
                    id={word.id}
                />
            ))} 
        </div>
    )
}

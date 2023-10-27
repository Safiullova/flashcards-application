import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

import Table from './Table'
import st from './style.module.scss'

import POST from "../../services/POST";
import DEL from "../../services/DEL";
import PUT from "../../services/PUT";

import Icon_add from "../../images/icons/add.svg";
import Icon_back_arrow from "../../images/icons/back_arrow.svg";


export default function WordsList() {

    const {words, flag, setFlag} = useContext(MyContext); // Массив с карточками\словами
    console.log(words);
    const [valueEn, setValueEn] = useState(''); // Состояние input англ слова
    const [valueTr, setValueTr] = useState(''); // Состояние input транскрипция
    const [valueRu, setValueRu] = useState(''); // Состояние input перевод
    const [valueTh, setValueTh] = useState(''); // Состояние input тема

    const [validEnglish, setValidEnglish] = useState(true);
    const [validRussian, setValidRussian] = useState(true);

    const cleanInputs = () => {
        setValueEn ('');
        setValueTr ('');
        setValueRu ('');
        setValueTh ('')
    }

    const checkValidEnglish =(e) => {
        const isValid = /^[a-zA-Z]*$/.test(e.target.value.trim())
            setValidEnglish(isValid)
            if (!isValid) {
                alert('Внимание! Английские слова пиши английскими буквами');
                setValueEn('')
            } else {setValueEn(e.target.value.trim())}
    };

    const checkValidRussian =(e) => {
        const isValid = /^[а-яА-ЯёЁ]*$/.test(e.target.value.trim())
        setValidRussian(isValid)
        if (!isValid) {
            alert('Внимание! Перевод должен быть на русском языке');
            setValueRu('')
            } else {setValueRu(e.target.value.trim())}
    };

    const handleChange = (e) => {
        if (e.target.name === 'newEnglish') {
            checkValidEnglish(e)}
                if (e.target.name === 'newTranscription') {
                    setValueTr(e.target.value.trim().toLowerCase())}
                        if (e.target.name === 'newRussian') {
                            checkValidRussian(e)}
                                if (e.target.name === 'newTheme') {
                                    setValueTh(e.target.value.trim().toLowerCase())}
    };

    const handleCanselBack = () => {
        cleanInputs()
    }

    const inpRef = useRef ();
    
    useEffect(() => {
        inpRef.current.focus();
        },[]);
    
        async function handleAddWord ()  {
        if (valueEn.trim() !== '' &&
            valueRu.trim() !== '' 
        ) {
            const newWord = {
                english: valueEn,
                transcription: valueTr,
                russian: valueRu,
                tags: valueTh,
                tags_json: "[\"\"]"
            };
            await POST.postWord(newWord);
            cleanInputs();
            setFlag(!flag)
        }
        else if (valueEn.trim() !=='' )
            {const english = `${valueEn.trim()}`;
                alert ('Как переводится слово ' + english.toUpperCase() +'? Заполни поле: "Перевод"')
    } else if (valueRu.trim() !=='' )
                {const russian = `${valueRu.trim()}`;
                    alert ('Как слово ' + russian.toUpperCase() +' пишется на английском? Заполни поле: "English"')}
        else {
            alert ('Чтобы выучить новое слово нужно заполнить: "English" и "Перевод"')
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
        <>
        <div className={st.container}>
            <div className={st.table__row}>
            <input ref={inpRef} className={validEnglish? st.table__row_input : `${st.table__row_input } ${st.error}`}  type="text" placeholder='english' name='newEnglish' value={valueEn} onChange={handleChange}></input>
            <input className={st.table__row_input} type="text" placeholder='транскрипция' name='newTranscription' value={valueTr} onChange={handleChange} ></input>
            <input className={validRussian? st.table__row_input : `${st.table__row_input } ${st.error}`} type="text" placeholder='перевод' name='newRussian' value={valueRu} onChange={handleChange}></input>
            <input className={st.table__row_input} type="text" placeholder='тема' name='newTheme'value={valueTh} onChange={handleChange}></input>
                <div className={st.table__row_buttonList} >
                        <img src={Icon_add} alt="add word" onClick={handleAddWord}></img>
                    {valueEn ||valueRu || valueTh || valueTr ? <img src={Icon_back_arrow} alt="back" onClick={handleCanselBack}/> : ''}
                </div>
            </div>
        </div>
        <br></br>
        <div className={st.container}>
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
                    change = {handleChange}
                />
            ))} 
        </div>
        </>
    )
}

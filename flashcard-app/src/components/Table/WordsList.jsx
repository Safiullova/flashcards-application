import cards from '../data/words.json'
import NewRow from './NewRow'
// import {useState} from "react";
import st from './style.module.scss'
import Table from './Table'


export default function WordsList() {
    // const [clicPlus, setClickPlus] = useState (false); // Состояние для удаления строки
    // const handlePlusWord = () => {
    //     setClickPlus (!clickPlus)
    // }

    return (
        <div className={st.container}>
            <h1>Список слов</h1>
            <NewRow></NewRow>
{/* <div className={st.table__row}>
    <input className={st.table__row_english} type="text" placeholder='english'></input>
    <input className={st.table__row_transcription} type="text" placeholder='transcription'></input>
    <input className={st.table__row_russian} type="text" placeholder='russian'></input>
    <input className={st.table__row_theme} type="text" placeholder='theme'></input>
    <div className={st.table__row_buttonList}>
        <button className={st.btnSave} onClick={handlePlusWord}>Добавить слово</button> 
    </div>
</div> */}

            {cards.map((word)=> (
                <div key={word.id}>
            <Table className={st.table}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
            isSelected={word.isSelected}
            /></div>
            ))}
        </div>
    )
}

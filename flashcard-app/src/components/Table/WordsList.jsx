import cards from '../data/words.json'
import NewRow from './NewRow'
import Table from './Table'
import st from './style.module.scss'

export default function WordsList() {
    return (
        <div className={st.container}>

            <NewRow></NewRow>

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

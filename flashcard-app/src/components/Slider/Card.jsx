import st from './style.module.scss'

export default function Card(props) {
    return (
        <div className={st.card + st.selected}>
            <p className='cardEnglish'>English: {props.english}</p>
            <p className='cardTranscription'>Transcription: {props.transcription}</p>
            <p className='cardRussian'>Russian: {props.russian}</p>
        {props.isSelected}
        </div>
    )
}

import st from './style.module.scss'

export default function Card(props) {
    return (
        <div className={st.card}>
            <p className='cardEnglish'>{props.english}</p>
            <p className='cardTranscription'>{props.transcription}</p>
            <p className='cardRussian'>{props.russian}</p>
        {props.isSelected}
        <button className={st.card_button}>Показать перевод</button>
        </div>
    )
}

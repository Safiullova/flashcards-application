import cards from '../data/words.json'
import st from './style.module.scss'
import Card from './Card'

export default function CardsList() {
  return (
    <div className={st.container} >
      {cards.map((card)=> (
        <div key={card.id}>
        <Card className={st.card}
        id={card.id}
        english={card.english}
        transcription={card.transcription}
        russian={card.russian}
        isSelected={card.isSelected}
      />
      </div>
      ))}
    </div>
  )
}
import cards from '../data/words.json'
import st from './style.module.scss'
import Card from './Card'

export default function Slider() {
  return (
    <div className={st.container}>
      {cards.map((card)=> (
        <Card className={st.card}
        english={card.english}
        transcription={card.transcription}
        russian={card.russian}
        isSelected={card.isSelected}
      />
      ))}
    </div>
  )
}
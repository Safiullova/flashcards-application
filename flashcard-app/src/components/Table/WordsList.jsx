import cards from '../data/words.json'
import st from './style.module.scss'
import Table from './Table'

export default function WordsList() {
    return (
        <div className={st.container}>
  <h1>Список слов</h1>

          {cards.map((word)=> (
            <Table className={st.table}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
            isSelected={word.isSelected}
          />
          ))}
        </div>
      )
    }

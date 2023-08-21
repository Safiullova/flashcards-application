import cards from '../data/words.json'
import st from './style.module.scss'
import Card from './Card'

export default function OneCard() {
    const index = Number (cards.length -1);
    const rand = Math.floor (Math.random(0, 10)*index ) +1;

console.log(index);
console.log(rand);
console.log(cards[rand]);

    return (
        <Card className={st.card}
        id={cards[rand].id}
        english={cards[rand].english}
        transcription={cards[rand].transcription}
        russian={cards[rand].russian}
        />
    )
}


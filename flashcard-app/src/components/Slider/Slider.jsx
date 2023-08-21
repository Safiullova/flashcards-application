import cards from '../data/words.json'
import st from './style.module.scss'
import {useState} from "react";
import Card from './Card'

export default function Slider() {
    // const index = Number (cards.length -1);
    // const rand = Math.floor (Math.random(0, 10)*index ) +1;

    let [index, setIndex] = useState (0);
    let [check, setCheck] = useState (0);
    const handleClickUp = () => {
        setIndex (index < cards.length? index +1 : 0)
        setCheck (check < cards.length? check +1 : 0);
    }
    
    function handleClickBack() {
        setCheck(check > 0 ? check - 1 : 0);
        setIndex (index > 0 ? index -1 : 0)
    }
    
    return (
        <div>
            <h1>Слайдер/Тренировка</h1>
            <Card className={st.card}
            id={cards[index].id}
            english={cards[index].english}
            transcription={cards[index].transcription}
            russian={cards[index].russian}
            />
            <div className={st.card__btnList}>
                <button className={st.card__btnList_Nok} onClick={handleClickBack}>Назад</button>
                <p className='счеты'>{check}</p>
                <p>/</p>
                <p className='сколько всего карточек'> {cards.length}</p>
                <button className={st.card__btnList_Ok} onClick={handleClickUp}>Вперед</button>
            </div>
        </div>
    )
}

import cards from '../data/words.json'
import st from './style.module.scss'
import {useState} from "react";
import Card from './Card'

export default function Slider() {
    // const index = Number (cards.length -1);
    // const rand = Math.floor (Math.random(0, 10)*index ) +1;

    let [index, setIndex] = useState (0);
    let [check, setCheck] = useState (1);

    const handleClickUp = () => {
        setIndex (index < cards.length-1 ? index +1 : 0);
        setCheck (check < cards.length? check +1 : 1);
    }
    
    function handleClickBack() {
        setCheck(check > 1 ? check -1 : 1);
        setIndex (index > 0 ? index -1 : 0);
    }
    
    return (
        <div>
            {/* <h1>Слайдер/Тренировка</h1> */}
            <Card className={st.card}
            id={cards[index].id}
            english={cards[index].english}
            transcription={cards[index].transcription}
            russian={cards[index].russian}
            />
            <div className={st.card__btnList}>
                <button className={st.card__btnList_Nok} onClick={handleClickBack}>Назад</button>
                <p>{check}</p> {/* Счетчик */}
                <p>/</p>
                <p>{cards.length}</p> {/* сколько всего карточек */}
                <button className={st.card__btnList_Ok} onClick={handleClickUp}>Вперед</button>
            </div>
        </div>
    )
}

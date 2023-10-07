// import cards from '../data/words.json'
import st from './style.module.scss';
import {useState} from "react";
import Card from './Card';
import { useContext} from 'react';
import { MyContext } from '../../context/MyContext';

export default function Slider() {

    const {words} = useContext(MyContext); // Массив с карточками\словами из контекста

    let [index, setIndex] = useState (0);
    let [check, setCheck] = useState (1);

    const handleClickUp = () => {
        setIndex (index < words.length-1 ? index +1 : 0);
        setCheck (check < words.length? check +1 : 1);
    }
    
    function handleClickBack() {
        setCheck(check > 1 ? check -1 : 1);
        setIndex (index > 0 ? index -1 : 0);
    }
    
    return (
        <div>
            <Card className={st.card}
            id={words[index].id}
            english={words[index].english}
            transcription={words[index].transcription}
            russian={words[index].russian}
            />
            <div className={st.card__btnList}>
                <button className={st.card__btnList_Nok} onClick={handleClickBack}>Назад</button>
                <p>{check}</p> {/* Счетчик */}
                <p>/</p>
                <p>{words.length}</p> {/* сколько всего карточек */}
                <button className={st.card__btnList_Ok} onClick={handleClickUp}>Вперед</button>
            </div>
        </div>
    )
}

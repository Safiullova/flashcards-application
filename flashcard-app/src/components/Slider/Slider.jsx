// import cards from '../data/words.json'
import st from './style.module.scss';
import {useState} from "react";
import Card from './Card';
import { useContext} from 'react';
import { MyContext } from '../../context/MyContext';
import Icon_back from "../../images/icons/back.png";
import Icon_forward from "../../images/icons/forward.png";


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
        <div className={st.container}>
            <div className={st.text}>
                <h3>В тренировке участвует столько карточек, сколько слов в твоей табличке. Жми на кнопку, когда будешь готов проверить верный перевод.</h3>
            </div>
            <div>
                <Card className={st.card}
                id={words[index].id}
                english={words[index].english}
                transcription={words[index].transcription}
                russian={words[index].russian}
                />
                <div className={st.card__btnList}>
                    <img src={Icon_back} alt="back"onClick={handleClickBack}/>
                    <p>{check}</p> {/* Счетчик */}
                    <p>/</p>
                    <p>{words.length}</p> {/* сколько всего карточек */}
                    <img src={Icon_forward} alt="forward" onClick={handleClickUp}/>
                </div>
            </div>
        </div>
    )
}

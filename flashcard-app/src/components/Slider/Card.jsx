import {useState} from "react";
import st from './style.module.scss'

export default function Card(props) {
    const {english, transcription, russian} = props;
    const [pressed, setPressed] = useState (false);
    const handleChange = () => {
        setPressed (!pressed)
    }
    const [click, setClick] = useState (false);
    const handleClickOk = () => {
        setClick (!click)
        setPressed (!pressed)
    }
    const handleClickNok = () => {
        setClick (!click)
        setPressed (!pressed)
    }


    return (
        <div className={st.card}>
            <h1 className={st.card__english}>{english}</h1>
            <div className={st.card__ranscription}>{transcription}</div>
            
            {!pressed ?
                (<button className={st.card_button} onClick={handleChange}>Показать перевод</button>)
                : (
                    <>
                        <div className={st.card__russian}>{russian}</div>
                        <div className={st.card__btnList}>
                            <button onClick={handleClickOk} className={st.card__btnList_Ok}>Правильно</button>
                            <button onClick={handleClickNok} className={st.card__btnList_Nok}>Еще повторить</button>
                        </div>
                    </>
                ) 
            }
        </div>
    )
}

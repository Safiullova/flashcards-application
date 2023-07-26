import st from './style.module.scss'

export default function Table(props) {
  return (
    
    <div className={st.table}>
  <div className={st.table__row}>
<div className={st.table__row_number}>1</div>
<div className={st.table__row_english}>{props.english}</div>
<div className={st.table__row_transcription}>{props.transcription}</div>
<div className={st.table__row_russian}>{props.russian}</div>
<div className={st.table__row_theme}>Тема</div>
<div className={st.table__row_buttonListEdit}>
  <button className='btnEdit'>Редактировать</button>
  <button className='btnDeleted'>Удалить</button>
</div>
<div className={st.table__row_buttonListSave}>
  <button className='btnSave'>Сохранить</button>
  <button className='btnCancel'>Отмена</button>
</div>
  </div>
</div>

  )
}

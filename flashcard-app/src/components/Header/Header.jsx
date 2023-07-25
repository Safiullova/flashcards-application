import st from './style.module.scss'

export default function Header() {
  return (
    <div className={st.header}>
      <img className={st.header_logo} src="assets/images/header-logo.svg" alt="LOGO"/>
      <nav className={st.header_nav}>
        <ul className={st.header_nav_list}>
          <li className={st.header_nav_list_item}>Список слов</li>
          <li className={st.header_nav_list_item}>Карточки</li>
          <li className={st.header_nav_list_item}>Тренировка</li>
          <li className={st.header_nav_list_item}>Добавить</li>
        </ul>
    </nav>
    <p className={st.header_tema}> Переключатель темы</p>
        </div>
  )
}

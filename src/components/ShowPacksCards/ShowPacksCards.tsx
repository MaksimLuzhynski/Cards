import style from "./ShowPacksCards.module.css"


export function ShowPacksCards() {
    return (
        <div className={style.showPacksCards}>

            <p className={style.title}>Show packs cards</p>
            <div className={style.buttonGroup}>
                <button className={style.buttonMy}>My</button>
                <button className={style.buttonAll}>All</button>
            </div>

        </div>)
}
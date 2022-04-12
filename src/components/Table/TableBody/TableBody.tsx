import style from "./TableBody.module.css"

export function TableBody(){
    return (
        <div className={style.tableBody}>
        <div>Name Pack</div>
        <div>4</div>
        <div>21.12.2021</div>
        <div>Ales Miranovich</div>
        <div><button>Learn</button></div>
    </div>
    )
}
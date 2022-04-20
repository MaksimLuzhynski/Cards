import style from "./TableHead.module.css"

export function TableHead() {
    return (
        <div className={style.tableHead}>
            <div className={style.name}>Name</div>
            <div className={style.cards}>Cards</div>
            <div className={style.lastUpdate}>Last Updated</div>
            <div className={style.createBy}>Created by</div>
            <div className={style.actions}>Actions</div>
        </div>)
}
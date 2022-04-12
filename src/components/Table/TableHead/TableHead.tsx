import style from "./TableHead.module.css"

export function TableHead() {
    return (
        <div className={style.tableHead}>
            <div>Name</div>
            <div>Cards</div>
            <div>Last Updated</div>
            <div>Created by</div>
            <div>Actions</div>
        </div>)
}
import style from "./Table.module.css"
import { TableBody } from "./TableBody/TableBody"
import { TableHead } from "./TableHead/TableHead"

export function Table() {
    return (
        <div className={style.table}>
            <TableHead />
            <TableBody />
        </div>
    )
}
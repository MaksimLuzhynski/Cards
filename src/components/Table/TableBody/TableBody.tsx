import { iteratorSymbol } from "immer/dist/internal"
import { useSelector } from "react-redux"
import { PackType } from "../../../store/packsReducer"
import { RootStateType } from "../../../store/store"
import style from "./TableBody.module.css"

export function TableBody() {

    const cardPacks = useSelector<RootStateType, PackType[]>(state => state.packs.cardPacks)

    console.log(cardPacks);


    return (
        <div>
            {
                cardPacks?.map(({ name, cardsCount, user_name, updated, _id }, index) =>
                    <div key={_id} className={index % 2 === 0 ? style.tableBodyColor1 : style.tableBodyColor2}>
                        <div className={style.name}>{name}</div>
                        <div className={style.cards}>{cardsCount}</div>
                        <div className={style.lastUpdate}>{updated.substr(0, 10)}</div>
                        <div className={style.createBy}>{user_name}</div>
                        <div className={style.actions}>
                            <div className={style.buttonGroup}>
                                <button className={style.buttonDelete}>Delete</button>
                                <button className={style.buttonEdit}>Edit</button>
                                <button className={style.buttonLearn}>Learn</button>
                            </div>
                        </div>
                    </div>)
            }
        </div >)
}




//  <div>Name Pack</div>
// <div>4</div>
// <div>21.12.2021</div>
// <div>Ales Miranovich</div>
// <div><button>Learn</button></div> 
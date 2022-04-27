import { iteratorSymbol } from "immer/dist/internal"
import { useDispatch, useSelector } from "react-redux"
import { deletePackTC, editPackTC, PackType } from "../../../store/packsReducer"
import { RootStateType } from "../../../store/store"
import style from "./TableBody.module.css"

export function TableBody() {

    const cardPacks = useSelector<RootStateType, PackType[]>(state => state.packs.cardPacks)

    const dispatch = useDispatch()

    const hadleDelete = (_id: string) => {
        let isAgry = confirm("Do you really want to remove Pack? All cards will be excluded from this course.");
        if (isAgry) {
            // alert(_id)
            dispatch(deletePackTC(_id));
        }
    }

    // const hadleEdit = (_id: string, name?: string) => {
    //     dispatch(editPackTC(_id, name))
    // }

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
                                <button
                                    className={style.buttonDelete}
                                    onClick={() => { hadleDelete(_id) }}
                                >
                                    Delete
                                </button>
                                <button
                                    className={style.buttonEdit}
                                    // onClick={() => { hadleEdit(_id, name) }}
                                >
                                    Edit
                                </button>
                                <button className={style.buttonLearn}>Learn</button>
                            </div>
                        </div>
                    </div>)
            }
        </div >)
}

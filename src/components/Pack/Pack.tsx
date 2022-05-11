import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePackTC, editPackTC } from "../../store/packsReducer";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import style from "./Pack.module.css";

type PackPropsType = {
    name: string
    cardsCount: number
    updated: string
    user_name: string
    index: number
    _id:string
}


export function Pack(props: PackPropsType) {

    const dispatch = useDispatch()

    const [isOpenModalWindow, setIsOpenModalWindow] = useState<boolean>(false)

    const openModalWindow = () => {
        setIsOpenModalWindow(true)
    }
    const closeModalWindow = () => {
        setIsOpenModalWindow(false)
    }
    const submitModalWindow=()=>{
        dispatch(deletePackTC(props._id))
        closeModalWindow()
    }

    const hadleEditPack = () => {
        alert()
        let newName = prompt("Edit name of your Pack", props.name);
        if (newName) {
            dispatch(editPackTC(props._id, newName))
        }
    }

    return (
        <div className={props.index % 2 === 0 ? style.tableBodyColor1 : style.tableBodyColor2}>
            <div className={style.name}>{props.name}</div>
            <div className={style.cards}>{props.cardsCount}</div>
            <div className={style.lastUpdate}>{props.updated.substr(0, 10)}</div>
            <div className={style.createBy}>{props.user_name}</div>
            <div className={style.actions}>
                <div className={style.buttonGroup}>
                    <button
                        className={style.buttonDelete}
                        onClick={openModalWindow}
                    >
                        Delete
                    </button>
                    <button
                        className={style.buttonEdit}
                        onClick={hadleEditPack}
                    >
                        Edit
                    </button>
                    <button className={style.buttonLearn}>Learn</button>
                </div>
            </div>


            <ModalWindow
                isOpen={isOpenModalWindow}
                title="Delete Pack"
                message={`Do you really want to remove ${props.name}?
                    All cards will be excluded from this course.`}
                _id={props._id}
                closeModalWindow={closeModalWindow}
                submitModalWindow={submitModalWindow}
            />
            <ModalWindow
                isOpen={isOpenModalWindow}
                title="Add new pack"
                message={`Do you really want to remove ${props.name}?
                    All cards will be excluded from this course.`}
                _id={props._id}
                closeModalWindow={closeModalWindow}
                submitModalWindow={submitModalWindow}
            />


        </div>


    )
}
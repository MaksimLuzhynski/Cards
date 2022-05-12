import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deletePackTC, editPackTC, PackType } from "../../../store/packsReducer"
import { RootStateType } from "../../../store/store"
import { ModalWindow } from "../../ModalWindow/ModalWindow"
import { Pack } from "../../Pack/Pack"
import style from "./TableBody.module.css"

// type ModalWindowType = { open: boolean, id: string | null, name: string }


export function TableBody() {

    const cardPacks = useSelector<RootStateType, PackType[]>(state => state.packs.cardPacks)

    // const dispatch = useDispatch()

    // let [isOpenModalWindow, setIsOpenModalWindow] = useState<ModalWindowType>({open: false, id: null, name: ''})


    // const openModalWindow = (id: string, name: string) => {
    //     setIsOpenModalWindow({open: true, id: id, name})
    // }

    // const closeModalWindow = () => {
    //     setIsOpenModalWindow({open: false, id: null, name: ''})
    // }

    // const submitModalWindow = (_id: string) => {
    //     if (_id) {
    //         dispatch(deletePackTC(_id))
    //     }
    //     closeModalWindow()
    // }

    // const hadleDeletePack=(_id: string, name: string)=>{
    //     openModalWindow(_id, name)
    // }




    // const hadleEditPack = (_id: string, name: string) => {
    //     alert(_id)
    //     let newName = prompt("Edit name of your Pack", name);
    //     if (newName) {
    //         dispatch(editPackTC(_id, newName))
    //     }
    // }

    return (
        <div>
            {cardPacks?.map((pack, index) => {
                return <Pack
                    key={pack._id} 
                    _id={pack._id}
                    cardsCount={pack.cardsCount}
                    index={index}
                    name={pack.name}
                    updated={pack.updated}
                    user_name={pack.user_name}
                    userId={pack.user_id}
                    />
            })}
        </div>
    )
}

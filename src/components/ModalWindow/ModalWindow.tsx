import { Button } from "../Button/Button";
import style from "./ModalWindow.module.css";

type ModalWindowPropsType = {
    title: string
    message: string
    isOpen: boolean
    _id: string
    closeModalWindow: () => void
    submitModalWindow: (_id: string) => void
}


export function ModalWindow(props: ModalWindowPropsType) {

    return (
        <>
            {props.isOpen &&
                <div className={style.modalOverlay}>
                    <div className={style.modalWindow}>
                        <div className={style.modalHeader}>
                            <div className={style.modalTitle}>{props.title}</div>
                            {/* <Icon name="times" onClick={onCancel} /> */}
                            <div
                                className={style.modalClose}
                                onClick={props.closeModalWindow}
                            >
                                X
                            </div>
                        </div>

                        <div className={style.modalBody}>
                            {props.message}
                        </div>
                        <div className={style.modalFooter}>
                            <Button
                                name={'Cancel'}
                                type={'button'}
                                onClick={props.closeModalWindow}
                                className={style.buttonCancel}
                            />
                            <Button
                                name={'Delete'}
                                type={'submit'}
                                onClick={() => props.submitModalWindow(props._id)}
                                className={style.buttonDelete}
                            />
                        </div>
                    </div>
                </div >
            }
        </>
    )

}


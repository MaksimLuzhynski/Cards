import { ChangeEvent, FormEvent, useState } from "react";
import style from "./CreateNewPassword.module.css"
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";
import { useDispatch } from "react-redux";
import { newPasswordTC } from "../../../store/authReducer";
import { useParams } from "react-router-dom";


export const CreateNewPassword = () => {

    const dispatch = useDispatch()
    const { token } = useParams<'token'>()

    const [passwordValue, setPasswordValue] = useState<string>('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (token) {
            dispatch(newPasswordTC(passwordValue, token))
        }
    }
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.currentTarget.value)
    }

    return (
        <div className={style.createNewPassword}>
            <h1 className={style.logoTitle}>Educational cards</h1>
            <h3 className={style.subTitle}>Create new password</h3>
            <form className={style.form}
                onSubmit={onSubmit}
            >
                <Input
                    label={'Password'}
                    name={'password'}
                    type={'password'}
                    value={passwordValue}
                    onChange={handleChangePassword}
                />
                <p className={style.messageInstruction}>Create new password
                    and we will send you further instructions to email
                </p>
                <div className={style.buttonCreateNewPassword}>
                    <Button
                        name={'Create new password'}
                        type={'submit'}
                    />
                </div>
            </form>
        </div>
    )
}
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { SnackBar } from "../../../components/SnackBar/SnackBar";
import { StatusType } from "../../../store/appReducer";
import { registrationTC, setAuthStatus } from "../../../store/authReducer";
import { RootStateType } from "../../../store/store";
import style from "./Registration.module.css"

export const Registration = () => {

    const authStatus = useSelector<RootStateType, StatusType>(state => state.auth.authStatus)

    const dispatch = useDispatch()

    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (confirmPasswordValue === passwordValue) {
            dispatch(registrationTC(emailValue, passwordValue))
        }
    }
    // const handleCancel =()=>{  
    // }
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
    }
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.currentTarget.value)
    }
    const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPasswordValue(e.currentTarget.value)
    }

    if (authStatus === 'succeeded') {
        return <Navigate to='/login' />
    }

    return (
        <div className={style.registration}>
            <h1 className={style.logoTitle}>Educational cards</h1>
            <h3 className={style.subTitle}>Sign Up</h3>
            <form
                className={style.form}
                onSubmit={onSubmit}
            >
                <Input
                    label={'Email'}
                    name={'email'}
                    type={'email'}
                    value={emailValue}
                    onChange={handleChangeEmail}
                />
                <Input
                    label={'Password'}
                    name={'password'}
                    type={'password'}
                    value={passwordValue}
                    onChange={handleChangePassword}
                />
                <Input
                    label={'Confirm password'}
                    name={'password'}
                    type={'password'}
                    value={confirmPasswordValue}
                    onChange={handleChangeConfirmPassword}
                />
                <div className={style.groupButtons}>
                    <Button
                        name={'Cancel'}
                        type={'button'}
                        // onClick={handleCancel}
                    />
                    <Button
                        name={'Registration'}
                        type={'submit'}
                    />
                </div>
            </form>
            <SnackBar />
        </div>
    )
}
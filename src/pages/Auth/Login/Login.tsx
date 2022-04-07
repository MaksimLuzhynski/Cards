import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Login.module.css"
import { Link, Navigate } from 'react-router-dom'
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";
import { loginTC } from "../../../store/authReducer";
// import { RootStateType } from "../../../store/store";
// import { StatusType } from "../../../store/appReducer";
import { SnackBar } from "../../../components/SnackBar/SnackBar";


export const Login = () => {

    const dispatch = useDispatch()

    const rememberMe = true
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(loginTC(emailValue, passwordValue, rememberMe))
    }
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
    }
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.currentTarget.value)
    }

    return (
        <div className={style.login}>
            <h1 className={style.logoTitle}>Educational cards</h1>
            <h3 className={style.subTitle}>Sign In</h3>
            <form className={style.form}
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
                <Link className={style.linkForgot} to='/forgotPassword'><span>Forgot Password</span></Link>
                <Button
                    name={'Login'}
                    type={'submit'}
                />
            </form>

            <p className={style.message}>Don’t have an account?</p>
            <Link className={style.link} to='/registration'><span>Sign Up</span></Link>

            <SnackBar />
        </div>
    )
}
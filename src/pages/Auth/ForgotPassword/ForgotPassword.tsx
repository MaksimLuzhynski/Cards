import { ChangeEvent, FormEvent, useState } from "react";
import style from "./ForgotPassword.module.css"
import { Link, Navigate } from 'react-router-dom'
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassTC } from "../../../store/authReducer";
import { RootStateType } from "../../../store/store";
import { StatusType } from "../../../store/appReducer";
import { SnackBar } from "../../../components/SnackBar/SnackBar";


export const ForgotPassword = () => {

    const forgotPassStatus = useSelector<RootStateType, StatusType>(state => state.auth.forgotPassStatus)

    const dispatch = useDispatch()

    const [emailValue, setEmailValue] = useState<string>('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
     
        dispatch(forgotPassTC(emailValue));
    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value);
    }

    if (forgotPassStatus === 'succeeded') {
        return <Navigate to='/checkEmail' />
    }

    return (
        <div className={style.forgotPassword}>
            <h1 className={style.logoTitle}>Educational cards</h1>
            <h3 className={style.subTitle}>Forgot your password?</h3>
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
                <p className={style.messageInstruction}>Enter your email
                    address and we will send you further instructions
                </p>
                <div className={style.buttonSendInstructions}>
                    <Button
                        name={'Send Instructions'}
                        type={'submit'}
                        // onClick={onClickHandle}
                    />
                </div>
            </form>

            <p className={style.message}>Did you remember your password?</p>
            <Link className={style.link} to='/login' ><span>Try logging in</span></Link>
            <SnackBar/>
        </div>
    )
}
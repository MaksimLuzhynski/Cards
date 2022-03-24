import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Login.module.css"
import { Link } from 'react-router-dom'
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";
import { loginTC } from "../../../store/authReducer";


export const Login = () => {

    // const [name, setName] = React.useState('your_email@gmail.com');

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(event.currentTarget.value);
    // };

    // const handleClick = () => {
    //     setName('');
    // }

    
    const dispatch = useDispatch()
    
    const rememberMe = true
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // const data = {
        //     email: emailValue,
        //     password: passwordValue,
        // }
        // console.log(data);
        dispatch(loginTC(emailValue, passwordValue, rememberMe))
        console.log(emailValue, passwordValue, rememberMe);
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
                <Link className={style.linkForgot} to='#'  ><span>Forgot Password</span></Link>
                <Button
                    name={'Login'}
                    type={'submit'}
                />
            </form>

            <p className={style.message}>Don’t have an account?</p>
            <Link className={style.link} to='#' ><span>Sign Up</span></Link>
        </div>
    )
}
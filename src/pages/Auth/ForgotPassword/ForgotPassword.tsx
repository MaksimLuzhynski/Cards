import { ChangeEvent, FormEvent, useState } from "react";
import style from "./ForgotPassword.module.css"
import { Link } from 'react-router-dom'
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";


export const ForgotPassword = () => {

    // const [name, setName] = React.useState('your_email@gmail.com');

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(event.currentTarget.value);
    // };

    // const handleClick = () => {
    //     setName('');
    // }

    const [emailValue, setEmailValue] = useState<string>('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {
            email: emailValue,
        }
        console.log(data);

    }
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
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
                    />
                </div>
            </form>

            <p className={style.message}>Did you remember your password?</p>
            <Link className={style.link} to='#' ><span>Try logging in</span></Link>
        </div>
    )
}
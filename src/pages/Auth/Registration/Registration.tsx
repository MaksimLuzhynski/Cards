import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import style from "./Registration.module.css"

export const Registration = () => {

    // const [name, setName] = React.useState('your_email@gmail.com');

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(event.currentTarget.value);
    // };

    // const handleClick = () => {
    //     setName('');
    // }
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (confirmPasswordValue === passwordValue) {
            const data = {
                password: passwordValue,
                email: emailValue,
                confirm: confirmPasswordValue,
            }
            console.log(data);
        }
    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
    }
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.currentTarget.value)
    }
    const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPasswordValue(e.currentTarget.value)
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
                    />
                    <Button
                        name={'Registration'}
                        type={'submit'}
                    />
                </div>
            </form>


        </div>
    )
}
import style from "./AuthPage.module.css"

type AuthPagePropsType = {
    login?: any
    registration?: any
    checkEmail?: any
    createNewPassword?: any
    forgotPassword?: any
}

export function AuthPage(props: AuthPagePropsType) {

    return (
        <div className={style.pageAuth}>
            {props.login}
            {props.registration}
            {props.checkEmail}
            {props.createNewPassword}
            {props.forgotPassword}
        </div>
    );
}


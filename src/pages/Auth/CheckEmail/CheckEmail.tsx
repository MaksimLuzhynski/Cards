import style from "./CheckEmail.module.css"
import { Link } from 'react-router-dom'
import LogoEmail from './LogoEmail.png'


export const CheckEmail = () => {

    return (
        <div className={style.checkEmail}>
            <h1 className={style.logoTitle}>Educational cards</h1>
            <img src={LogoEmail}/>
            <Link className={style.link} to='#' >
                <h3 className={style.subTitle}>CheckEmail</h3>
            </Link>

            <p className={style.message}>We’ve sent an Email
                with instructions to example@mail.com
            </p>
        </div>
    )
}
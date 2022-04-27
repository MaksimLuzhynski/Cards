import style from "./Avatar.module.css"
import AvatarFoto from './AvatarFoto.jpg'


export function Avatar() {
    return (<div>

        <div className={style.avatar}>
            <img
                className={style.avatarImg}
                // src={Avatar}
                src={AvatarFoto}
            />
            <p className={style.avatarName}>Danuta Kavalevich</p>
            <p className={style.avatarProfession}>Front-end developer</p>
        </div>
    </div>)
}
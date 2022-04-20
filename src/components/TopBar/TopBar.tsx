import style from "./TopBar.module.css"
import ProfileImg from './ProfileImg.jpg'

export function TopBar() {

    return (
        <div className={style.topBar}>

            <div className={style.title}>Educational cards</div>
            <div className={style.switch} >
                <div className={style.switchPacksList}>Packs List</div>
                <div className={style.switchProfile}>
                    {/* <img
                        className={style.img}
                        src={ProfileImg}
                    /> */}
                    Profile
                </div>
            </div>
        </div>
    );
}
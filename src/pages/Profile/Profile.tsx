import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import { Table } from "../../components/Table/Table";
import { logoutTC } from "../../store/authReducer";
import Avatar from './Avatar.jpg'
import style from "./Profile.module.css"

export function Profile() {

    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logoutTC())
    }

    return (
        <div className={style.profile}>
            <div className={style.wrapper}>
                <div className={style.leftPart}>
                    <div className={style.avatar}>
                        <img
                            className={style.avatarImg}
                            src={Avatar}
                        />
                        <p className={style.avatarName}>Danuta Kavalevich</p>
                        <p className={style.avatarProfession}>Front-end developer</p>
                    </div>
                    <div className={style.numberOfCards}>
                        Number of cards
                    </div>
                </div>

                <div className={style.rightRart}>
                    <h1 className={style.title}>Title</h1>
                    <input
                        className={style.seach}
                        type="search"
                        placeholder="Seach..."
                    />
                    <Table />
                    <div className={style.pagination}>
                        Pagination
                    </div>
                </div>
            </div>
            <Button
                name={'Log out'}
                type={'button'}
                onClick={handleLogOut}
            />
        </div>
    );
}
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import { Table } from "../../components/Table/Table";
import { TopBar } from "../../components/TopBar/TopBar";
import { logoutTC } from "../../store/authReducer";
import { getPacksTC } from "../../store/packsReducer";
import Avatar from './Avatar.jpg'
import style from "./Profile.module.css"

export function Profile() {

    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logoutTC())
    }

    useEffect(() => {
        dispatch(getPacksTC())
    }, [])

    return (
        <div className={style.profile}>
            <TopBar/>
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
                    <h1 className={style.title}>Packs list of Danuta </h1>
                    <input
                        className={style.seach}
                        type="search"
                        placeholder="Seach..."
                    />
                    <Button
                        name={'Add new pack'}
                        type={'button'}
                        onClick={handleLogOut}
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
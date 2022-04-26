import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import { Table } from "../../components/Table/Table";
import { TopBar } from "../../components/TopBar/TopBar";
import { logoutTC } from "../../store/authReducer";
import { addNewPackTC, getPacksTC, PackType } from "../../store/packsReducer";
import { RootStateType } from "../../store/store";
import Avatar from './Avatar.jpg'
import style from "./Profile.module.css"

export function Profile() {

    // const newPacks = useSelector<RootStateType, Array<PackType>>(state => state.packs.cardPacks)


    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logoutTC())
    }

    const handleAddNewPack = () => {
        let newPackName = prompt("Add new pack", '');
        dispatch(addNewPackTC(newPackName));
    }

    useEffect(() => {
        dispatch(getPacksTC())
    }, [])

    return (
        <div className={style.profile}>
            <TopBar />
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

                    <div className={style.seachAndButton}>
                        <input
                            className={style.seach}
                            type="search"
                            placeholder="Seach..."
                        />
                        <div className={style.buttonAddNewPack}>
                            <Button
                                name={'Add new pack'}
                                type={'button'}
                                onClick={handleAddNewPack}
                            />
                        </div>
                    </div>

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
        </div >
    );
}
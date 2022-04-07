import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { SnackBar } from "../../components/SnackBar/SnackBar";
import { StatusType } from "../../store/appReducer";
import { logoutTC } from "../../store/authReducer";
import { RootStateType } from "../../store/store";
import style from "./Profile.module.css"

export function Profile() {

    // const logoutStatus = useSelector<RootStateType, StatusType>(state => state.auth.logoutStatus)
    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)

    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logoutTC())
    }
    //   ????????????????????????????????????????????????????
    console.log(isAuth);

    // if (isAuth) {
    //     return <Navigate to='/login' />
    // }

    return (
        <div className={style.Profile}>
            <NavLink to={'/profile'}> Profile </NavLink>
            <NavLink to={'/login'}> Login </NavLink>
            <NavLink to={'/registration'}> Registration </NavLink>
            <NavLink to={'/forgotPassword'}> Forgot password </NavLink>
            <NavLink to={'/createNewPassword'}> СreateNewPassword </NavLink>




            {/* <NavLink to={'/Test'}> Test </NavLink>
            <NavLink to={'/list-packs'}> Packs </NavLink> */}
            <div>
                Profile
            </div>
            <Button
                name={'Log out'}
                type={'button'}
                onClick={handleLogOut}
            />



            {/* <SnackBar /> */}

        </div>
    );
}
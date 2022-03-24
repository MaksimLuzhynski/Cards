import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { logoutTC } from "../../store/authReducer";
import style from "./Home.module.css"

export function Home() {
    
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logoutTC())
        console.log("привет");
        
    }

    return (
        <div className={style.pageHome}>
            <NavLink to={'/'}> Home </NavLink>
            <NavLink to={'/login'}> Login </NavLink>
            <NavLink to={'/registration'}> Registration </NavLink>
            <NavLink to={'/forgotPassword'}> Forgot password </NavLink>
            <NavLink to={'/createNewPassword'}> СreateNewPassword </NavLink>

            <NavLink to={'/profile'}> Profile </NavLink>



            {/* <NavLink to={'/Test'}> Test </NavLink>
            <NavLink to={'/list-packs'}> Packs </NavLink> */}
            <div>
                Home Page
            </div>
            <Button
                name={'Log out'}
                type={'button'}
                onClick={handleLogOut}
            />
        </div>
    );
}
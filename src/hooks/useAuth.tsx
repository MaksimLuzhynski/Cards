import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthPage } from '../pages/Auth/AuthPage';
import { CheckEmail } from '../pages/Auth/CheckEmail/CheckEmail';
import { CreateNewPassword } from '../pages/Auth/CreateNewPassword/CreateNewPassword';
import { ForgotPassword } from '../pages/Auth/ForgotPassword/ForgotPassword';
import { Login } from '../pages/Auth/Login/Login';
import { Registration } from '../pages/Auth/Registration/Registration';
import { Profile } from '../pages/Profile/Profile';



export const useAuth = (auth: boolean) => {
    if (auth) {
        return (
            <Routes>
                {/* <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>} /> */}
                <Route path="/*" element={<Navigate to='/profile' />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/createNewPassword/:token" element={<AuthPage createNewPassword={<CreateNewPassword />} />} />

                {/* <Route path="/set-new-password/:token" element={<AuthPage createNewPassword={<CreateNewPassword />} />} /> */}
                {/* <Route path="https://maksimluzhynski.github.io/Cards/#/set-new-password/:token" element={<AuthPage createNewPassword={<CreateNewPassword />} />} /> */}
            </Routes>
        )
    } else {
        return (<Routes>

            <Route path="*" element={<Navigate to='/login' />} />
            <Route path="/login" element={<AuthPage login={<Login />} />} />
            <Route path="/registration" element={<AuthPage registration={<Registration />} />} />
            <Route path="/checkEmail" element={<AuthPage checkEmail={<CheckEmail />} />} />
            <Route path="/forgotPassword" element={<AuthPage forgotPassword={<ForgotPassword />} />} />
            <Route path="/createNewPassword/:token" element={<AuthPage createNewPassword={<CreateNewPassword />} />} />


            {/* <Route path="/newpassword" element={<NewPassword />} /> */}
        </Routes>)
    }
}
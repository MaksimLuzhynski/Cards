import { Route, Routes } from 'react-router-dom';
import { AuthPage } from '../pages/Auth/AuthPage';
import { CheckEmail } from '../pages/Auth/CheckEmail/CheckEmail';
import { CreateNewPassword } from '../pages/Auth/CreateNewPassword/CreateNewPassword';
import { ForgotPassword } from '../pages/Auth/ForgotPassword/ForgotPassword';
import { Login } from '../pages/Auth/Login/Login';
import { Registration } from '../pages/Auth/Registration/Registration';
import { Home } from '../pages/Home/Home';
import { Profile } from '../pages/Profile/Profile';

export const useAuth = (auth: boolean) => {

    if (auth) {
        return (
            <Routes>
                <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>} />
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/createNewPassword" element={<AuthPage createNewPassword={<CreateNewPassword />} />} />
            </Routes>
        )
    } else {
        return (<Routes>
            <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>} />
            <Route path="/" element={<AuthPage login={<Login />} />} />
            <Route path="/login" element={<AuthPage login={<Login />} />} />
            <Route path="/registration" element={<AuthPage registration={<Registration />} />} />
            <Route path="/checkEmail" element={<AuthPage checkEmail={<CheckEmail />} />} />
            <Route path="/forgotPassword" element={<AuthPage forgotPassword={<ForgotPassword />} />} />



            {/* <Route path="/newpassword" element={<NewPassword />} /> */}
        </Routes>)
    }
}
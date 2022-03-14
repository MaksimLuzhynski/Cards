import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { AuthPage } from './pages/Auth/AuthPage';
// import { NewPassword } from './pages/NewPassword/NewPassword';
import { Profile } from './pages/Profile/Profile';
import { Registration } from './pages/Auth/Registration/Registration';
import { Login } from './pages/Auth/Login/Login';
import { CheckEmail } from './pages/Auth/CheckEmail/CheckEmail';
import { CreateNewPassword } from './pages/Auth/CreateNewPassword/CreateNewPassword';
import { ForgotPassword } from './pages/Auth/ForgotPassword/ForgotPassword';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage login={ <Login/>}/>} />
        <Route path="/registration" element={<AuthPage registration={ <Registration/>}/>} />
        <Route path="/checkEmail" element={<AuthPage checkEmail={ <CheckEmail />}/>} />
        <Route path="/createNewPassword" element={<AuthPage createNewPassword={ <CreateNewPassword/>}/>} />
        <Route path="/forgotPassword" element={<AuthPage forgotPassword={ <ForgotPassword/>}/>} />
        
        <Route path="/profile" element={<Profile />} />
      
        {/* <Route path="/newpassword" element={<NewPassword />} /> */}
      </Routes>
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import './App.css';
import { useAuth } from './hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from './store/store';
import { StatusType, authMeTC } from './store/appReducer';
import { LinearProgress } from '@mui/material';
import { TopBar } from './components/TopBar/TopBar';


function App() {
  const dispatch = useDispatch()
  const isInitialized = useSelector<RootStateType, boolean>(state => state.app.isInitialized)
  const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
  const appStatus = useSelector<RootStateType, StatusType>(state => state.app.appStatus)

  const rootRoute = useAuth(isAuth)

  useEffect(() => {
    dispatch(authMeTC())
  }, [])

  if (!isInitialized) {
    return <div>Loading....</div>
  }


//   if (!isInitialized) {
//     return <div style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
//         <img src={loader} alt="loader"/>
//     </div>
// }

  return (
    <div className="App">
      {/* <TopBar/> */}
      {appStatus === 'loading' && <LinearProgress />}
      {rootRoute}
    </div>
  );
}

export default App;

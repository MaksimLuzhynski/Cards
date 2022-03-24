import React, { useEffect } from 'react';
import './App.css';
import { useAuth } from './hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from './store/store';
import { authMeTC } from './store/appReducer';


function App() {
  const dispatch = useDispatch()
  const isInitialized = useSelector<RootStateType, boolean>(state => state.app.isInitialized)
  const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
  const rootRoute = useAuth(isAuth)

  useEffect(() => {
    dispatch(authMeTC())
  }, [])

  if (!isInitialized) {
    return <div>Loading....</div>
  }

  return (
    <div className="App">
      {rootRoute}
    </div>
  );
}

export default App;

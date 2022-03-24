import thunkMiddleware from 'redux-thunk';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { appReducer } from './appReducer';

export type RootStateType = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    // recoverPass: recoverPassReducer,
    // packs: cardsPackReducer,
    // cards: cardsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});


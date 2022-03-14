import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { loginReducer } from "./loginReducer";
import { newPasswordReducer } from "./newPasswordReducer";

export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    login: loginReducer,
    newPassword: newPasswordReducer,
    // recoverPass: recoverPassReducer,
    // packs: cardsPackReducer,
    // cards: cardsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));


//@ts-ignore
window.store = store
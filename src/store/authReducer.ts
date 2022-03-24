import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosError } from "axios";
import { Dispatch } from "react";
import { authAPI } from "../api/authAPI";
// import { authMeCR } from "./appReducer";

const initialStateAuth = {
    user: {} as UserType,
    status: 'idle' as StatusType,  //Нужна ли типизация, почему не ругается на некорректные значения???
    isAuth: <boolean>false
}
export type UserType = {
    _id: string,
    email: string,
    rememberMe: boolean,
    isAdmin: boolean,
    name: string,
    verified: boolean,
    publicCardPacksCount: number,
    created: string,
    updated: string,
    __v: number,
    token: string,
    tokenDeathTime: number,
    avatar: string
}
type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


const slice = createSlice({
    name: 'auth',
    initialState: initialStateAuth,
    reducers: {
        setUserLogIn: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload
            state.isAuth = true
        },
        setUserLogOut: (state) => {
            state.user = {} as UserType
            state.isAuth = false
        },
        setIsAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
            state.isAuth = action.payload.isAuth
        }
    },
    // extraReducers: builder => {
    //     builder.addCase(authMeCR.fulfilled, (state, action) => {
    //         state.isAuth = true
    //         state.user = action.payload
    //     })
    // }
})


export const authReducer = slice.reducer;

export const { setUserLogIn, setUserLogOut, setIsAuth } = slice.actions


export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    // setIsLoading(true)
    authAPI.logIn({ email, password, rememberMe })
        .then((res) => {
            dispatch(setUserLogIn(res.data));
            console.log("Вошел");
        })
        .catch((err: AxiosError) => {
            const error = err.response ? err.response.data.error :
                (err.message + 'more details about error in the console')
            // dispatch(SetErrorAC(error))
        })
    // .finally(() => setIsLoading(false))
}

export const logoutTC = () => (dispatch: Dispatch<any>) => {
    authAPI.logOut()
        .then(() => {
            dispatch(setUserLogOut());    //????????? {}
            console.log("Вышел");
        })
        .catch((err) => {
            console.log(err)
        })
}



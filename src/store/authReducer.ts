import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosError } from "axios";
import { Dispatch } from "react";
import { authAPI } from "../api/authAPI";
import { setAppStatus, StatusType } from "./appReducer";


export type InitialStateAuthType = {
    user: UserType,
    authStatus: StatusType,
    forgotPassStatus: StatusType,
    isAuth: boolean,
    authError: string | null
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


const initialStateAuth: InitialStateAuthType = {
    user: {} as UserType,
    authStatus: 'idle',
    forgotPassStatus: 'idle',
    isAuth: false,
    authError: null
}

const handleError = (error: AxiosError, dispatch: any) => {
    const authError = error.response ? error.response.data.error :
        (error.message + 'more details about error in the console')
    dispatch(setAppStatus({ appStatus: 'failed' }))
    dispatch(setAuthError({ authError }))
}

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
        },
        setAuthStatus: (state, action: PayloadAction<{ authStatus: StatusType }>) => {
            state.authStatus = action.payload.authStatus
        },
        setAuthError: (state, action: PayloadAction<{ authError: string | null }>) => {
            state.authError = action.payload.authError
        },
        setForgotPass: (state, action: PayloadAction<{ forgotPassStatus: StatusType }>) => {
            state.forgotPassStatus = action.payload.forgotPassStatus
        },
        setNewPassword: (state, action: PayloadAction<{ token: string }>) => {
            state.user.token = action.payload.token
        }
    },
})


export const authReducer = slice.reducer;

export const { setUserLogIn, setUserLogOut, setIsAuth, setAuthStatus, setAuthError, setForgotPass, setNewPassword } = slice.actions


export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    dispatch(setAppStatus({ appStatus: 'loading' }))
    authAPI.logIn({ email, password, rememberMe })
        .then((res) => {
            dispatch(setUserLogIn(res.data))
            dispatch(setAppStatus({ appStatus: 'succeeded' }))
        })
        .catch((error: AxiosError) => {
            handleError(error, dispatch)
        })
}

export const logoutTC = () => (dispatch: Dispatch<any>) => {
    dispatch(setAppStatus({ appStatus: 'loading' }))
    authAPI.logOut()
        .then(() => {
            dispatch(setUserLogOut());
            dispatch(setAppStatus({ appStatus: 'succeeded' }))
        })
        .catch((error: AxiosError) => {
            handleError(error, dispatch)
        })
}

export const registrationTC = (email: string, password: string) => (dispatch: Dispatch<any>) => {
    dispatch(setAppStatus({ appStatus: 'loading' }))
    dispatch(setAuthStatus({ authStatus: 'loading' }))
    authAPI.registration({ email, password })
        .then(() => {
            dispatch(setAuthStatus({ authStatus: 'succeeded' }))
            dispatch(setAuthStatus({ authStatus: 'idle' }))
            dispatch(setAppStatus({ appStatus: 'succeeded' }))
        })
        .catch((error: AxiosError) => {
            handleError(error, dispatch)
            dispatch(setAuthStatus({ authStatus: 'failed' }))
        })
}

export const forgotPassTC = (email: string) => (dispatch: Dispatch<any>) => {
    dispatch(setAppStatus({ appStatus: 'loading' }));
    dispatch(setForgotPass({ forgotPassStatus: 'loading' }));
    authAPI.recoveryPassword({
        email,
        from: "<luzhynski@mail.ru>",
        message: `<div style="background-color: lime; padding: 15px"> 
            password recovery link: <a href='http://localhost:3000/createNewPassword/$token$'>link</a></div>`
    })
        .then(() => {
            dispatch(setForgotPass({ forgotPassStatus: 'succeeded' }));
            dispatch(setAppStatus({ appStatus: 'succeeded' }));
        })
        .catch((error: AxiosError) => {
            handleError(error, dispatch)
            dispatch(setForgotPass({ forgotPassStatus: 'failed' }));
        })
}

// ??????????????????????   типизация токена   ??????????????
export const newPasswordTC = (password: string, token: string) => (dispatch: Dispatch<any>) => {
    dispatch(setAppStatus({ appStatus: 'loading' }))
    authAPI.newPassword({ password, resetPasswordToken: token })
        .then(() => {
            dispatch(setAppStatus({ appStatus: 'succeeded' }));
            dispatch(setNewPassword({ token }))

            console.log(password, token)

        })

        .catch((error: AxiosError) => {
            handleError(error, dispatch)
            console.log("не прошло" + password, token)
        })
}



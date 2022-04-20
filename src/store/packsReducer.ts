import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosError } from "axios";
import { Dispatch } from "react";
import { packsAPI } from "../api/packsAPI";
import { setAppStatus } from "./appReducer";


export type PackType = {
    _id: string,
    user_id: string,
    private: boolean,
    name: string,
    user_name: string,
    path: string,
    grade: number,
    shots: number,
    cardsCount: number,
    type: string,
    rating: number,
    created: string,
    updated: string,
    more_id: string,
}

export type PacksInitialStateType = {
    cardPacks: Array<PackType>,
    page: number,
    pageCount: number,
    cardPacksTotalCount: number,
    minCardsCount: number,
    maxCardsCount: number,
    token: string,
    tokenDeathTime: number
}

const initialStatePacks = {} as PacksInitialStateType

const slice = createSlice({
    name: 'packs',
    initialState: initialStatePacks,
    reducers: {

        setPacks: (state, action: PayloadAction<PacksInitialStateType>) => {                        
            return action.payload
             },
        // setUserLogOut: (state) => {
        //     state.user = {} as UserType
        //     state.isAuth = false
        // },
        // setIsAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
        //     state.isAuth = action.payload.isAuth
        // },
        // setAuthStatus: (state, action: PayloadAction<{ authStatus: StatusType }>) => {
        //     state.authStatus = action.payload.authStatus
        // },
        // setAuthError: (state, action: PayloadAction<{ authError: string | null }>) => {
        //     state.authError = action.payload.authError
        // },
        // setForgotPass: (state, action: PayloadAction<{ forgotPassStatus: StatusType }>) => {
        //     state.forgotPassStatus = action.payload.forgotPassStatus
        // },
        // setNewPassword: (state, action: PayloadAction<{ token: string }>) => {
        //     state.user.token = action.payload.token
        // }
    },
})


export const packsReducer = slice.reducer;

export const { setPacks } = slice.actions


export const getPacksTC = () => (dispatch: Dispatch<any>) => {
    dispatch(setAppStatus({ appStatus: 'loading' }))
    packsAPI.getPacks( {})
        .then((res) => {
            dispatch(setPacks(res.data))
            dispatch(setAppStatus({ appStatus: 'succeeded' }))
            console.log(`Server - ${res.data}`);
            
        })
        .catch((error: AxiosError) => {
        console.log("паки не получили"+ error);
        
        })
}


// export const logoutTC = () => (dispatch: Dispatch<any>) => {
//     dispatch(setAppStatus({ appStatus: 'loading' }))
//     authAPI.logOut()
//         .then(() => {
//             dispatch(setUserLogOut());
//             dispatch(setAppStatus({ appStatus: 'succeeded' }))
//         })
//         .catch((error: AxiosError) => {
//             handleError(error, dispatch)
//         })
// }

// export const registrationTC = (email: string, password: string) => (dispatch: Dispatch<any>) => {
//     dispatch(setAppStatus({ appStatus: 'loading' }))
//     dispatch(setAuthStatus({ authStatus: 'loading' }))
//     authAPI.registration({ email, password })
//         .then(() => {
//             dispatch(setAuthStatus({ authStatus: 'succeeded' }))
//             dispatch(setAuthStatus({ authStatus: 'idle' }))
//             dispatch(setAppStatus({ appStatus: 'succeeded' }))
//         })
//         .catch((error: AxiosError) => {
//             handleError(error, dispatch)
//             dispatch(setAuthStatus({ authStatus: 'failed' }))
//         })
// }

// export const forgotPassTC = (email: string) => (dispatch: Dispatch<any>) => {
//     dispatch(setAppStatus({ appStatus: 'loading' }));
//     dispatch(setForgotPass({ forgotPassStatus: 'loading' }));
//     authAPI.recoveryPassword({
//         email,
//         from: "<luzhynski@mail.ru>",
//         message: `<div style="background-color: lime; padding: 15px"> 
//             password recovery link: <a href='http://localhost:3000/createNewPassword/$token$'>link</a></div>`
//     })
//         .then(() => {
//             dispatch(setForgotPass({ forgotPassStatus: 'succeeded' }));
//             dispatch(setAppStatus({ appStatus: 'succeeded' }));
//         })
//         .catch((error: AxiosError) => {
//             handleError(error, dispatch)
//             dispatch(setForgotPass({ forgotPassStatus: 'failed' }));
//         })
// }


// export const logoutTC = () => (dispatch: Dispatch<any>) => {
//     dispatch(setAppStatus({ appStatus: 'loading' }))
//     authAPI.logOut()
//         .then(() => {
//             dispatch(setUserLogOut());
//             dispatch(setAppStatus({ appStatus: 'succeeded' }))
//         })
//         .catch((error: AxiosError) => {
           
//         })
// }






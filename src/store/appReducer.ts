import { authAPI } from './../api/authAPI';
import { Dispatch } from "react";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setUserLogIn } from './authReducer';

type InitialStateAppType = {
    isInitialized: boolean
    appStatus: StatusType,
    error: string | null,
}
export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


const initialStateApp: InitialStateAppType = {
    isInitialized: false,
    appStatus: 'idle',
    error: ''
}

const slice = createSlice({
    name: 'app',
    initialState: initialStateApp,
    reducers: {
        setInitialized: (state, action) => {
            state.isInitialized = true
            state.appStatus = 'succeeded'
        },
        setAppStatus: (state, action: PayloadAction<{ appStatus: StatusType }>) => {
            state.appStatus = action.payload.appStatus
        }
    },
})

export const appReducer = slice.reducer;

export const { setInitialized, setAppStatus } = slice.actions


export const authMeTC = () => (dispatch: Dispatch<any>) => {
    authAPI.authMe()
        .then((res) => {
            dispatch(setUserLogIn(res.data));
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            dispatch(setInitialized(true))
        })
}

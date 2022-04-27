import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosError } from "axios";
import { Dispatch } from "react";
import { start } from "repl";
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
        setNewPack: (state, action: PayloadAction<PackType>) => {
            state.cardPacks.unshift(action.payload)
        },
        setDeletePack: (state, action: PayloadAction<PackType>) => {
            state.cardPacks = state.cardPacks.filter(item => item._id !== action.payload._id)
        }

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

export const { setPacks, setNewPack, setDeletePack: setDeletePack } = slice.actions


export const getPacksTC = () => (dispatch: Dispatch<any>) => {
    dispatch(setAppStatus({ appStatus: 'loading' }))
    packsAPI.getPacks({})
        .then((res) => {
            dispatch(setPacks(res.data))
            dispatch(setAppStatus({ appStatus: 'succeeded' }))
            console.log(`Server - ${res.data}`);

        })
        .catch((error: AxiosError) => {
            console.log("паки не получили" + error);

        })
}

export const addNewPackTC = (newPackName: string | null) => (dispatch: Dispatch<any>) => {
    dispatch(setAppStatus({ appStatus: 'loading' }))
    packsAPI.addPack({ cardsPack: { name: newPackName } })
        .then((res) => {
            dispatch(setNewPack(res.data.newCardsPack))
            dispatch(setAppStatus({ appStatus: 'succeeded' }))
        })
        .catch((error: AxiosError) => {
            console.log("Новый пакет не создался" + error);
        })
}

export const deletePackTC = (_id: string) => (dispatch: Dispatch<any>) => {
    dispatch(setAppStatus({ appStatus: 'loading' }))
    packsAPI.deletePack(_id)
        .then((res) => {
            dispatch(setDeletePack(res.data.deletedCardsPack))
            dispatch(setAppStatus({ appStatus: 'succeeded' }))
        })
        // .catch((error: AxiosError,res) => {
        //     console.log("Пакет не удалился" + error);
        // })
        .catch((res) => {
            console.log(res.data.deletedCardsPack);
        })
}

export const editPackTC = (_id: string, name: string) => (dispatch: Dispatch<any>) => {

}







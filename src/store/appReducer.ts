import { authAPI } from './../api/authAPI';
import { Dispatch } from "react";
import { createSlice } from '@reduxjs/toolkit';
import { setUserLogIn } from './authReducer';


const initialStateApp = {
    isInitialized:<boolean> false,
    status: 'idle' as StatusType , 
    // error: ''
}
type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const slice = createSlice({
    name: 'app',
    initialState: initialStateApp,
    reducers: {
        setInitialized: (state, action)=>{
            state.isInitialized = true
            state.status = 'succeeded'
        }
    },


    // пример от Саши как делать AsyncThunk
    // extraReducers: builder => {
    //     builder.addCase(authMeCR.fulfilled, (state, action) => {
    //         state.isInitialazed = true
    //     })
    //     builder.addCase(authMeCR.rejected, (state, action) => {
    //             state.error = action.payload
    //             state.isInitialazed = true
    //     })
    // }
})

export const appReducer = slice.reducer;

export const {setInitialized} = slice.actions


export const authMeTC = () => (dispatch: Dispatch<any>) => {
    authAPI.authMe()
    .then((res) => {
        dispatch(setUserLogIn(res.data));
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(()=>{
        dispatch(setInitialized(true))
    })
}







//Пример от Саши как он пишет санки
// export const authMe = () => async (dispatch: any) => {
//     try {
//         const response = await authAPI.authMe()
//         dispatch( setUserLogIn(response.data))
//     }
//     catch (err: any) {

//     }
//     finally{
//         dispatch(setInitialized(true))

//     }
// }


// пример от Саши как делать AsyncThunk
// export const authMeCR = createAsyncThunk<
// UserType, // то что отдает 
// {}, // что принимает в качестве параметров
// {state: RootStateType,
// dispatch: AppDispatch,
// rejectValue: string}

// >('app/authMeCR',async ({}, {dispatch, rejectWithValue})=>{
//     try {
//         const response = await authAPI.authMe()
//         return response.data
//     }
//     catch (err: any) {
//         return rejectWithValue('error')
//     }
    
// })
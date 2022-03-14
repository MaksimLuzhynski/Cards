const initialState = {
   
}

type InitialStateType = typeof initialState

export const newPasswordReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case '':
            return {...state}
        default:
            return state
    }
}
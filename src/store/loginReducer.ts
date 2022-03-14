const initialState = {
   
}

type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state}
        default:
            return state
    }
}
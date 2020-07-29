const initialState = {
    currBreach: null
}

export function breachReducer(state = initialState, action) {

    switch (action.type) {
        
        case 'SET_BREACH':

            return {
                ...state,
                currBreach: action.breach
            }

        default:
            return state;
    }
}


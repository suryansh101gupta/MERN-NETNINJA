import {createContext, useReducer} from 'react';

export const RoutineContext = createContext()

export const RoutineReducer = (state, action) => {
    switch(action.type){
        case 'SET_ROUTINE':
            return{
                routines: action.payload
            }
        case 'CREATE_ROUTINE':
            return{
                routines: [action.payload, ...state.routines]
            }
        case 'DELETE_ROUTINE':
            return{
                routines: state.routines.filter((w) => w._id !== action.payload._id )
            }
        default:
            return state
    }

}

export const RoutineContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(RoutineReducer, {
        routines: null
    })

    // dispatch({type: 'SET_ROUTINE', payload})

    return(
        <RoutineContext.Provider value = {{...state, dispatch}}>
            {children}
        </RoutineContext.Provider>
    )
}
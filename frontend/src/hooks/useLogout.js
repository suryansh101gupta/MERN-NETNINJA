import { useAuthContext } from "./useAuthContext"
import { useRoutineContext } from "./useRoutinesContext"

export const useLogout = () => {
    const {dispatch: routinesDispatch} = useRoutineContext()
    const {dispatch} = useAuthContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        routinesDispatch({type: 'SET_ROUTINE', payload: null})
    }

    return {logout}
}
import { RoutineContext } from "../context/RoutineContext";
import { useContext } from "react";

export const useRoutineContext = () => {
    const context = useContext(RoutineContext)

    if(!context){
        throw Error('useRoutineContext must be used inside a routineContextProvider')
    }

    return context
}
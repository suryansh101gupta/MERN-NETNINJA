import { useEffect } from "react"
import { useRoutineContext } from "../hooks/useRoutinesContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import RoutineDetails from '../components/RoutineDetails'
import RoutineForm from "../components/RoutineForm"

const Home = () => {
    // const [routines, setRoutines] = useState(null)
    const {routines, dispatch} = useRoutineContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchRoutines = async () => {
            const response = await fetch('/api/routines', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                // setRoutines(json)
                dispatch({type: 'SET_ROUTINE', payload: json})
            }
        }

        fetchRoutines()
    
        if(user){
            fetchRoutines()
        }
    }, [dispatch, user])

    return(
        <div className="home">
            <div className="routines">
                {routines && routines.map((routine) => (
                    <RoutineDetails key={routine._id} routine={routine}/> 
                ))}
            </div>
            <RoutineForm />
        </div>
    )
}

export default Home
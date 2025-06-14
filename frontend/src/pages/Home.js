import { useEffect, useState } from "react"

// components
import RoutineDetails from '../components/RoutineDetails'
import RoutineForm from "../components/RoutineForm"

const Home = () => {
    const [routines, setRoutines] = useState(null)

    useEffect(() => {
        const fetchRoutines = async () => {
            const response = await fetch('/api/routines')
            const json = await response.json()

            if(response.ok){
                setRoutines(json)
            }
        }

        fetchRoutines()
    }, [])

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
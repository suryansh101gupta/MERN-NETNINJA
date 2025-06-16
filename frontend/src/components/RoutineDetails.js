import { useRoutineContext } from "../hooks/useRoutinesContext"
import formatDistanceToNow from'date-fns/formatDistanceToNow'

const RoutineDetails = ({ routine }) => {
  const {dispatch} = useRoutineContext()

  const handleClick = async () => {
    const response = await fetch('/api/routines/' + routine._id, 
      { method: 'DELETE' }
    )
    const json = await response.json()

    if(response.ok){
      dispatch({type: 'DELETE_ROUTINE', payload: json})
    }
  }

  return (
    <div className="routine-details">
      <h4>{routine.title}</h4>
      <p><strong>Product - </strong>{routine.product}</p>
      <p><strong>Time (in mins) - </strong>{routine.time}</p>
      <p>{formatDistanceToNow(new Date(routine.createdAt), { addSuffix: true })}</p>
      <span className='material-symbols-outlined'onClick={handleClick}>delete</span>
    </div>
  )
}

export default RoutineDetails
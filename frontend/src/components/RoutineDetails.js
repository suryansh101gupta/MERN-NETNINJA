const RoutineDetails = ({ routine }) => {

  return (
    <div className="routine-details">
      <h4>{routine.title}</h4>
      <p><strong>Product - </strong>{routine.product}</p>
      <p><strong>Time (in mins) - </strong>{routine.time}</p>
      <p>{routine.createdAt}</p>
    </div>
  )
}

export default RoutineDetails
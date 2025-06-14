import { useState } from 'react'

const RoutineForm = () => {
  const [title, setTitle] = useState('')
  const [product, setProduct] = useState('')
  const [time, setTime] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const Routine = {title, product, time}
    
    const response = await fetch('/api/routines', {
      method: 'POST',
      body: JSON.stringify(Routine),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setProduct('')
      setTime('')
      console.log('new Routine added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Routine</h3>

      <label>Routine Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Product :</label>
      <input 
        type="text" 
        onChange={(e) => setProduct(e.target.value)} 
        value={product}
      />

      <label>Time (in mins):</label>
      <input 
        type="number" 
        onChange={(e) => setTime(e.target.value)} 
        value={time} 
      />

      <button>Add Routine</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default RoutineForm
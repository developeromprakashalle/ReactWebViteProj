import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count +1)}>Increment by 1</button>
      <label >Count status {count} </label>
    </div>
  )
}

export default App

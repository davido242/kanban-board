import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p className='bg-mainBackgroundColor p-3 h-4 w-4' onClick={() => setCount((county) => county + 1) }>{count}</p>
    </>
  )
}

export default App

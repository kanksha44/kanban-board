import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Description from './components/Description'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Description/>
        
    </>
  )
}

export default App

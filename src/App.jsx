import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Description from './components/Description'
import Board from "./Components/Board/Board"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Board/>
    
      <Description/>
        
    </>
  )
}

export default App

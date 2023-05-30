import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DecimalToBinary from './Components/Calculators/DecimalToBinary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DecimalToBinary/>
    </>
  )
}

export default App

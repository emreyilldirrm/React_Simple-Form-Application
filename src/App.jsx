import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register_Form from './components/Register_Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register_Form />

    </>
  )
}

export default App

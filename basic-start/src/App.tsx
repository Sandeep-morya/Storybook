import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/MyButton/Button'

function App(){
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button>I am a Button</Button>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/Button"

function App() {
  

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Toggle Button</h1>

      <p className="read-the-docs">
        Click on the button below to toggle
      </p>
      <Button />
    </>
  )
}

export default App

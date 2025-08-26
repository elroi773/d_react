import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./Counter";
import MirrorInput from './MirrorInput';
import ToggleBox from './ToggleBox';

function App() {
  
  return (
    <div>
      <Counter />
      <MirrorInput />
      <ToggleBox />
    </div>
  )
}

export default App

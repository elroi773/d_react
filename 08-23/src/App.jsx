import { useState } from 'react'
import Badge from './Badge'
import StudnetList from './StudentList'
import './App.css'

function App() {
  return (
    <div>
      <Badge score ={0}/>
      <StudnetList />
    </div>
  )
}

export default App

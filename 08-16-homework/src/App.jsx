import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'
import Password from './Password'
import Feel from './Feel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ProfileCard
        name="김이레"
        hobby="불멍 물멍"
        fav_food="연어!!!!!!!!!!!!!!1"
      />
      <Password/>
      <Feel />
    </div>
  )
}

export default App

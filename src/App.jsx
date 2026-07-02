// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { projects } from './data/data'
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
      <h1>Midsummercat</h1>
      <ProjectShowcase projects={projects} />
    </div>
  )
}

export default App

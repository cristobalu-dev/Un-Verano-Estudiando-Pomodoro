import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <main>
        <div className='boxContador'>
          <h1>5:00</h1>
          <progress value={0} max={100} className='progressBar'></progress>
        </div>
        <div className='botones'>
          <button>Empezar</button>
          <button>Configurar</button>
          <button>Checkpoint</button>
        </div>
      </main>
    <footer>
      <div>
        <nav className='navegacion'>
          <button className='navButton'> Holaaaa </button>
          <button className='navButton'> Holaaaa </button>
          <button className='navButton'> Holaaaa </button>
          <button className='navButton'> Holaaaa </button>
        </nav>
      </div>
    </footer>
    </>
  )
}

export default App

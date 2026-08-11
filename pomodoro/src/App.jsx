import { useState } from 'react'
import './App.css'
import corazon from './assets/corazon.png'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <main>
        <div className='divtitulo'>
          <h1>UN VERANO ESTUDIANDO</h1>
          <p>v.0.0.1</p>
        </div>
        <div className='boxContador'>
          <h1>5:00</h1>
          <progress value={0} max={100} className='progressBar'></progress>
        </div>
        <div className='boxBotones'>
          <button className='empezarButton'>Empezar</button>
          <button className='checkPointButton'>Checkpoint</button>
        </div>
        <div className='boxDibujo'>
          <img src={corazon} className='corazon' />
        </div>
      </main>
    <footer>
      <div>
        <nav className='navegacion'>
          <button className='navButton'> Acerca de </button>
          <button className='navButton'> Configuración </button>
          <button className='navButton'> Holaaaa </button>
          <button className='navButton'> Holaaaa </button>
        </nav>
      </div>
    </footer>
    </>
  )
}

export default App

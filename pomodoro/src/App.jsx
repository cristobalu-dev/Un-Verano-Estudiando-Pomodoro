import { useState } from 'react'
import './App.css'
import Corazonanim from './components/corazon'
import logo from './assets/LOGO.png'

function App() {
  const [count, setCount] = useState(0)
  return (
    <> 
      <head>
        <title>Un Verano Estudiando | POMODORO</title>
      </head>
      <main>
        <div className='box'>
          <div className='boxleft'>
            <div className='divtitulo'>
              <img src={logo} className='logo' />
              <p>v.0.5</p>
            </div>
            
            <div className='boxDibujo'>
              <Corazonanim/>
            </div>
          </div>

          <div className='boxright'>

          <div className='boxContador'>
            <h1>25:00</h1>
          <progress value={0} max={100} className='progressBar'></progress>
          <div className='boxBotones'>
            <button className='empezarButton'>Empezar</button>
            <button className='checkPointButton'>Checkpoint</button>
          </div>
          </div>
          </div>




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

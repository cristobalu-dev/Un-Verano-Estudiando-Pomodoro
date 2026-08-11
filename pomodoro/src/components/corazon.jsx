import { useState,useEffect} from 'react'

import corazon from '../assets/corazon1.png'
import corazon1 from '../assets/corazon2.png'



function Corazonanim() {
    const frames = [corazon, corazon1]
    const  [frame, setFrame] = useState(0)

    useEffect(()=> {
        const intervalo = setInterval(() => {
            setFrame(frame => (frame+1) % frames.length)
        }, 1000)

        return () => clearInterval(intervalo)
    }, [])
    return (
        <img src={frames[frame]} alt="" className='corazon' />
    )
}

export default Corazonanim
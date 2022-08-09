import {useEffect} from 'react'
import mole from '../mole.png'

function Mole(props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 2000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '25vw'}}
            src={mole}
            onClick={props.handleClick} />
        </div>
    )
}
export {Mole}
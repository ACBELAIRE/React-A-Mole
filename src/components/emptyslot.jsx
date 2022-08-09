import { useEffect } from "react"
import molehill from '../molehill.png'


 const EmptySlot = (props) => {

            //declare useEffect()  //define a random number of seconds
        useEffect(() => {
        let randomSeconds =  Math.ceil(Math.random() * 2000)
            //declare variable timer assigned to a setTimeout which will togle displayMole on and off and return the timer to do it again randomly
        let timer = setTimeout (() => {
            props.toggle(true)
        },randomSeconds)
            return () => clearTimeout(timer)
         
    })
            
    return (
        <div>
            <img style={{'width': '25vw'}} src={molehill} />
        </div>
    )
    }
 

export{EmptySlot}
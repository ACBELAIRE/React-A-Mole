import {useState} from 'react'
import {Mole} from '../components/mole.jsx'
import{EmptySlot} from '../components/emptyslot.jsx'

function MoleContainer(props){

    //Define the state variable for the mole and its state and set it to false
    let [theMole, setTheMole] = useState(false)

    // within the function we need to define a click/bop function that will increase the score using manipulation of setScore to increase by one with every click/bop
    const handleClick = (event) => {
        props.setScore(props.score +1)
        setTheMole(false)
    }
    
     //define a variable called displayMole, where if the mole is shown it will increase the score with the click of the mouse and display the mole. if not the mole wont be shown but only an empty slot. 
     let displayMole = theMole ? <Mole setScore={props.setScore} 
                                toggle={setTheMole} 
                                handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
        <div>
            {displayMole}
        </div>
    )
}
export {MoleContainer}
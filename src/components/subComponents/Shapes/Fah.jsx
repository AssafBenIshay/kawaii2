import './Shapes.css'
import { Howl, Howler } from 'howler'
import React from 'react'

export default function Fah({ note, setUserSequence, userSequence, PCTurn, gameState, ref: faPRef }) {
    const fRef = React.useRef()

    function playSound() {
        note.play()
        fRef.current.classList.add('shape-spark')

        if (!PCTurn && gameState) { setUserSequence([...userSequence, 3]) }
        setTimeout(() => {
            fRef.current.classList.remove('shape-spark')
        }, 300);
    }

        React.useImperativeHandle(faPRef, () => {
            return { playSound }
        })
    

    return (
        <svg
            ref={fRef}
            className='fa-css svg topC'
            width="52.489826mm"
            height="35.496025mm"
            viewBox="0 0 52.489826 35.496025"
            version="1.1"
            id="svg-fah"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <defs
                id="defs1" />
            <g
                id="layer1"
                transform="translate(-68.222139,-24.103273)">
                <path
                    onClick={playSound}
                    d="m 94.237085,24.103273 c -9.13169,0.04444 -18.095534,2.458028 -26.01495,7.00474 l 16.463078,28.473715 c 2.917192,-1.644658 6.203165,-2.524283 9.551872,-2.55695 3.415122,0.0055 6.771035,0.892249 9.743075,2.57452 l 16.7318,-28.357959 c -8.04172,-4.670862 -17.17508,-7.133367 -26.474875,-7.138066 z"
                    id="fah" />
            </g>
        </svg>
    )
}



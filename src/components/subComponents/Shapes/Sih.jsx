import React from 'react'
import './Shapes.css'
import { Howl, Howler } from 'howler'

export default function Sih({ note, setUserSequence, userSequence, PCTurn, gameState, ref: siPRef }) {
    const sRef = React.useRef()

    function playSound() {
        sRef.current.classList.add('circle-spark')
        note.play()

        if (!PCTurn && gameState) { setUserSequence([...userSequence, 6]) }
        setTimeout(() => {
            sRef.current.classList.remove('circle-spark')
        }, 300);
    }

    React.useImperativeHandle(siPRef, () => {
        return { playSound }
    })


    return (
        <svg
            ref={sRef}
            className='si-css svg circle'
            width="25.560003mm"
            height="25.559996mm"
            viewBox="0 0 25.560003 25.559996"
            version="1.1"
            id="svg-sih"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <defs
                id="defs1" />
            <g
                id="layer1"
                transform="translate(-81.359994,-69.840001)">
                <circle
                    onClick={playSound}
                    id="sih"
                    cx="94.139999"
                    cy="82.620003"
                    r="12.78" />
            </g>
        </svg>
    )
}

import './Shapes.css'
import { Howl, Howler } from 'howler'
import React from 'react'

export default function Lah({ note, setUserSequence, userSequence, PCTurn, gameState, ref: laPRef }) {
    const lRef = React.useRef()

    function playSound() {
        note.play()
        lRef.current.classList.add('shape-spark')

        if (!PCTurn && gameState) { setUserSequence([...userSequence, 5]) }
        setTimeout(() => {
            lRef.current.classList.remove('shape-spark')
        }, 300);
    }

    React.useImperativeHandle(laPRef, () => {
        return { playSound }
    })


    return (
        <svg
            ref={lRef}
            className='la-css svg bottomR'
            width="42.722446mm"
            height="45.389496mm"
            viewBox="0 0 42.722446 45.389496"
            version="1.1"
            id="svg-lah"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <defs
                id="defs1" />
            <g
                id="layer1"
                transform="translate(-109.56278,-85.156917)">
                <path
                    onClick={playSound}
                    d="m 152.28525,85.156916 -32.95457,0.02067 c -0.16804,6.852918 -3.86111,13.133808 -9.76788,16.612434 l 16.24242,28.75639 c 16.26866,-9.34595 26.35084,-26.62785 26.48003,-45.389494 z"
                    id="lah" />
            </g>
        </svg>

    )
}


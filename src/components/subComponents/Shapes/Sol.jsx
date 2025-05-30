import './Shapes.css'
import { Howl, Howler } from 'howler'
import React from 'react'

export default function Sol({ note, setUserSequence, userSequence, PCTurn, gameState, ref: solPRef }) {
    const soRef = React.useRef()

    function playSound() {
        note.play()
        soRef.current.classList.add('shape-spark')

        if (!PCTurn && gameState) { setUserSequence([...userSequence, 4]) }
        setTimeout(() => {
            soRef.current.classList.remove('shape-spark')
        }, 300)
    }

    React.useImperativeHandle(solPRef, () => {
        return { playSound }
    })


    return (
        <svg
            ref={soRef}
            className='sol-css svg topR'
            width="42.526512mm"
            height="45.625641mm"
            viewBox="0 0 42.526512 45.625641"
            version="1.1"
            id="svg-sol"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <defs
                id="defs1" />
            <g
                onClick={playSound}
                id="layer1"
                transform="translate(-110.29711,-34.00345)">
                <path
                    d="m 126.7385,34.003446 -16.44138,28.519189 c 5.89581,3.554672 9.52792,9.911208 9.59683,16.795357 l 32.92668,0.311092 0.003,-0.114721 c -0.004,-18.723996 -9.93108,-36.043364 -26.08513,-45.510917 z"
                    id="sol" />
            </g>
        </svg>
    )
}


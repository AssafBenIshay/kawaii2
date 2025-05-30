import './Shapes.css'
import { Howl, Howler } from 'howler'
import React from 'react'

export default function Doh({ note, setUserSequence, userSequence, PCTurn, gameState, ref: doPRef }) {
    const dRef = React.useRef()

    function playSound() {
        note.play()
        dRef.current.classList.add('shape-spark')

        if (!PCTurn && gameState) { setUserSequence([...userSequence, 0]) }
        setTimeout(() => {
            dRef.current.classList.remove('shape-spark')
        }, 300);
    }

    React.useImperativeHandle(doPRef, () => {
        return { playSound }
    })

    return (
        <svg
            ref={dRef}
            className='do-css svg bottomC'
            width="52.492928mm"
            height="35.570438mm"
            viewBox="0 0 52.492928 35.570438"
            version="1.1" id="svg-dow"
            xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" >
            <defs id="defs1" />
            <g id="layer1" transform="translate(-67.814926,-105.17588)">
                <path
                    onClick={playSound}
                    d="m 84.537935,105.17588 -16.72301,28.34349 c 8.017606,4.69299 17.13214,7.18598 26.42216,7.22695 9.141955,-0.005 18.125685,-2.3858 26.070765,-6.9081 l -16.51941,-28.56984 c -2.91709,1.6444 -6.202868,2.52384 -9.551355,2.55644 -3.406843,-0.0357 -6.747111,-0.94796 -9.69915,-2.64894 z"
                    id="dow"
                />
            </g>
        </svg>

    )
}


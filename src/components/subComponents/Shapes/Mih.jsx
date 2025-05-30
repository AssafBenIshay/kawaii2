import './Shapes.css'
import { Howl, Howler } from 'howler'
import React from 'react'

export default function Mih({ note, setUserSequence, userSequence, PCTurn, gameState, ref: miPRef }) {
    const mRef = React.useRef()

    function playSound() {
        note.play()
        mRef.current.classList.add('shape-spark')

        if (!PCTurn && gameState) { setUserSequence([...userSequence, 2]) }
        setTimeout(() => {
            mRef.current.classList.remove('shape-spark')
        }, 300);
    }

    React.useImperativeHandle(miPRef, () => {
        return { playSound }
    })

    return (
        <svg
            ref={mRef}
            className='mi-css svg topL'
            width="42.70644mm"
            height="45.296459mm"
            viewBox="0 0 42.70644 45.296459"
            version="1.1"
            id="svg-mih"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <defs
                id="defs1" />
            <g
                id="layer1"
                transform="translate(-36.734132,-33.867539)">
                <path
                    onClick={playSound}
                    d="M 63.25086,33.867537 C 46.996594,43.187464 36.90385,60.428112 36.734132,79.163997 l 32.938558,-0.02067 c 0.168042,-6.852914 3.861117,-13.133798 9.767879,-16.612423 z"
                    id="mih" />
            </g>
        </svg>
    )
}

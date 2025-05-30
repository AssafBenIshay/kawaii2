import './Shapes.css'
import { Howl, Howler } from 'howler'
import React from 'react'

export default function Reh({ note, setUserSequence, userSequence, PCTurn, gameState, ref: rePRef }) {
    const rRef = React.useRef()

    function playSound() {
        note.play()
        rRef.current.classList.add('shape-spark')

        if (!PCTurn && gameState) { setUserSequence([...userSequence, 1]) }
        setTimeout(() => {
            rRef.current.classList.remove('shape-spark')
        }, 300);
    }

    React.useImperativeHandle(rePRef, () => {
        return { playSound }
    })

    return (
        <svg
            ref={rRef}
            className='re-css svg bottomL'
            width="42.584mm"
            height="45.538834mm"
            viewBox="0 0 42.584 45.538834"
            version="1.1"
            id="svg-reh"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <defs
                id="defs1" />
            <g
                id="layer1"
                transform="translate(-36.709293,-84.691826)">
                <path
                    onClick={playSound}
                    d="m 36.717595,84.691828 c -0.0028,0.03807 -0.0056,0.07613 -0.0083,0.114205 0.0452,18.703347 9.988207,35.985157 26.134839,45.424627 l 16.449157,-28.53314 c -5.882092,-3.525163 -9.52723,-9.83748 -9.640238,-16.694083 z"
                    id="reh" />
            </g>
        </svg>
    )
}

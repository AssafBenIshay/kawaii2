import React from 'react'
import './componentCss/GameBoard.css'
import { Howl, Howler } from 'howler'
import Doh from './subComponents/Shapes/Dow'
import Reh from './subComponents/Shapes/Reh'
import Mih from './subComponents/Shapes/Mih'
import Fah from './subComponents/Shapes/Fah'
import Sol from './subComponents/Shapes/Sol'
import Lah from './subComponents/Shapes/Lah'
import Sih from './subComponents/Shapes/Sih'

import doh from '../assets/sounds/ddo.mp3'
import reh from '../assets/sounds/re.mp3'
import mih from '../assets/sounds/mi.mp3'
import fah from '../assets/sounds/fa.mp3'
import sol from '../assets/sounds/sol.mp3'
import lah from '../assets/sounds/la.mp3'
import sih from '../assets/sounds/si.mp3'
import lose from '../assets/sounds/trumpet-wah-stage-lost.mp3'
import stageUpdateSound from '../assets/sounds/metal-hit-sound-effect-stage-passed.mp3'



export default function GameBoard({ setCurrentSignedInUser, currentSignedInUser, gameState, setGameState,
    PCTurn, setPCTurn, msBetweenSound, setShowGameLostModel }) {
    const [music, setMusic] = React.useState([])
    const [userSequence, setUserSequence] = React.useState([])
    const [notes] = React.useState([new Howl({ src: doh, preload: true, volume: 0.6 }),
    new Howl({ src: reh, preload: true, volume: 0.6 }), new Howl({ src: mih, preload: true, volume: 0.4 }),
    new Howl({ src: fah, preload: true, volume: 0.6 }), new Howl({ src: sol, preload: true, volume: 0.6 }),
    new Howl({ src: lah, preload: true, volume: 0.6 }), new Howl({ src: sih, preload: true, volume: 0.6 }),
    ])
    const [loseSound] = React.useState(new Howl({ src: lose, preload: true, volume: 0.5 }))
    const [stageSound] = React.useState(new Howl({ src: stageUpdateSound, preload: true, volume: 0.3 }))
    const [indexer, setIndexer] = React.useState(0)
    const [score, setScore] = React.useState(0)

    const doPRef = React.useRef(null)
    const rePRef = React.useRef(null)
    const miPRef = React.useRef(null)
    const faPRef = React.useRef(null)
    const solPRef = React.useRef(null)
    const laPRef = React.useRef(null)
    const siPRef = React.useRef(null)

    React.useState(() => {
    })

    React.useEffect(() => {
        if (gameState && PCTurn) {
            //? On this side of the "if" sounds are being played acc to the accumulated sequence    
            let index = 0;
            const intrvl = setInterval(() => {
                if (index < music.length) {
                    //notes[music[index]].play() //TODO replace with useImperativeHandle
                    switch (music[index]) {
                        case 0:
                            doPRef.current.playSound()
                            break;
                        case 1:
                            rePRef.current.playSound()
                            break;
                        case 2:
                            miPRef.current.playSound()
                            break;
                        case 3:
                            faPRef.current.playSound()
                            break;
                        case 4:
                            solPRef.current.playSound()
                            break;
                        case 5:
                            laPRef.current.playSound()
                            break;
                        case 6:
                            siPRef.current.playSound()
                            break;
                        default:
                            break;
                    }
                }
                index++
                if (index === music.length) {
                    //? Clearing interval if it is the last note ?//
                    clearInterval(intrvl)
                    setPCTurn(false)
                }
            }, msBetweenSound);

        } else if (gameState && !PCTurn) {
            //? on this side of the "if" effect updates upon user click and the notes being compared ?//
            if (userSequence[indexer] === music[indexer]) {
                //TODO make a function here to give positive feedback
                updateSignedInUserScore()
            } else {
                if (userSequence[indexer] !== undefined) {
                    console.log({currentSignedInUser});
                    updateLocalStorageWithLostUserData()
                    loseSound.playing() ? '' : loseSound.play()

                    setTimeout(() => {
                        setShowGameLostModel(true)
                        setGameState(false)
                        setPCTurn(false)
                        setUserSequence([])

                        setStartingMusicSequenceBasedOnUserStage()
                    }, 3000);
                }

            }
            function setStartingMusicSequenceBasedOnUserStage() {
                var musicLengthBasedOnUserStage = 1
                var dummyArr = []
                if (currentSignedInUser) {
                    if (currentSignedInUser.Stage > 0) {
                        musicLengthBasedOnUserStage = currentSignedInUser.Stage * 4
                    }
                }
                for (let index = 0; index < musicLengthBasedOnUserStage; index++) {
                    dummyArr.push(Math.floor(Math.random() * 7))
                }
                setMusic(dummyArr)
            }

        }
        function updateSignedInUserScore() {
            //? function update both score and highscore if broken ?//   
            setIndexer(indexer + 1)
            var CSIUHighScore = currentSignedInUser.Highscore
            var newStage = Math.floor(CSIUHighScore / 4)

            if (indexer + 1 > score) {
                setScore(indexer + 1)
            }

            if (score % 4 === 0 && indexer % 4 === 0 && indexer !==0) {
                //? play a sound to notify user when a new stage passed
                stageSound.play()
                console.log('Stage PASSED || score:',score,' || indexer:',indexer,"=",new Date().toLocaleTimeString())
            }

            setCurrentSignedInUser({
                ...currentSignedInUser,
                Score: score,
                Highscore: score > CSIUHighScore ? score : CSIUHighScore,
                Stage: newStage,
            })
        }

        function updateLocalStorageWithLostUserData(){
            var id = currentSignedInUser.Id
            var losingUser = {
                "Name": currentSignedInUser.Name,
                "Email": currentSignedInUser.Email,
                "Password": currentSignedInUser.Password,
                "Score": 0,
                "Speed": currentSignedInUser.Speed,
                "Stage": currentSignedInUser.Stage,
                "Highscore": currentSignedInUser.Highscore,
            
            }
            localStorage.setItem('KawaiiUsersDB', JSON.stringify({id,losingUser}))
        }


    }, [PCTurn, currentSignedInUser, gameState, indexer, loseSound, msBetweenSound, music, music.length, notes, score, setCurrentSignedInUser, setGameState, setPCTurn, setShowGameLostModel, stageSound, userSequence])



    React.useEffect(() => {
        //? reseting user sequence and adding random sound to music
        if (indexer === music.length) {
            setMusic([...music, Math.floor(Math.random() * 7)])
            setUserSequence([])
            setPCTurn(true)
            setIndexer(0)
        }

    }, [indexer, music, setPCTurn])

    return (
        <div className={`shapes-container ${currentSignedInUser ? "" : 'spinner'} `}>
            <Doh setUserSequence={setUserSequence} note={notes[0]} userSequence={userSequence} PCTurn={PCTurn}
                gameState={gameState} ref={doPRef} />
            <Reh setUserSequence={setUserSequence} note={notes[1]} userSequence={userSequence} PCTurn={PCTurn}
                gameState={gameState} ref={rePRef} />
            <Mih setUserSequence={setUserSequence} note={notes[2]} userSequence={userSequence} PCTurn={PCTurn}
                gameState={gameState} ref={miPRef} />
            <Fah setUserSequence={setUserSequence} note={notes[3]} userSequence={userSequence} PCTurn={PCTurn}
                gameState={gameState} ref={faPRef} />
            <Sol setUserSequence={setUserSequence} note={notes[4]} userSequence={userSequence} PCTurn={PCTurn}
                gameState={gameState} ref={solPRef} />
            <Lah setUserSequence={setUserSequence} note={notes[5]} userSequence={userSequence} PCTurn={PCTurn}
                gameState={gameState} ref={laPRef} />
            <Sih setUserSequence={setUserSequence} note={notes[6]} userSequence={userSequence} PCTurn={PCTurn}
                gameState={gameState} ref={siPRef} />
        </div>
    )
}

//* 1: on startBtn model "Hi Assaf , Are you Ready to Play?"
//* 2: build algorythem for sound building
//* 3: build algorythem for pc generated and user generated comparison
//* 4: activate increse and decrese buttons
//* 5: to set a block on game start when sound is off
//* 6: saved pc generated sounds sequence playing machanisem
//* 7: make the buttons blink upon play
//* 8: connect the speed buttons to the interval
//* 9: add חיווי to when user finishes or mistaken
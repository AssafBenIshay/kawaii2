import React from 'react'
import '../components/componentCss/BottomConsole.css'

export default function BottomConsole({ setCurrentSignedInUser, currentSignedInUser, setGameState, gameState,
    setShowGameModel, PCTurn, setPCTurn, muteStatus, setMsBetweenSound }) {
    const [buttonText, setButtonText] = React.useState('START')

    React.useEffect(() => {
        if (currentSignedInUser && gameState && PCTurn) { setButtonText('Wait for it...') }
        else if (currentSignedInUser && gameState && !PCTurn) { setButtonText('Repeate') }
        else if (!currentSignedInUser) { setButtonText('Demo Game') }
        else if (currentSignedInUser) { setButtonText('Start') }

    }, [PCTurn, currentSignedInUser])

    function startGame() {
        if (!muteStatus && !gameState) {
            setShowGameModel(true)
            setMsBetweenSound(2000 - currentSignedInUser.Speed * 200)
            //|monitor the msBetweenSound Var
        }
    }

    function speedUp() {
        var speed = currentSignedInUser.Speed

        if (speed < 9) {
            setMsBetweenSound(last => last - 200)
            setCurrentSignedInUser({
                ...currentSignedInUser,
                "Speed": speed + 1,
            })
        }
    }

    function speedDown() {
        var speed = currentSignedInUser.Speed
        if (speed > 1) {
            setMsBetweenSound(last => last + 200)
            setCurrentSignedInUser({
                ...currentSignedInUser,
                "Speed": speed - 1,
            })
        }
    }


    return (
        <div className={`bottom-console ${gameState && PCTurn ? 'muted-pc-turn' : ''}`}>
            <button className={`bottom-console-button `} onClick={() => speedDown()}>Slower</button>
            <button className={`bottom-console-button ${currentSignedInUser ? '' : 'inactive'}`}
                onClick={startGame}>{buttonText}</button>
            <button className={`bottom-console-button `} onClick={() => speedUp()}>Faster</button>
        </div>
    )
}
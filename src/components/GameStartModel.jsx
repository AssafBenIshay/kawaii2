import './componentCss/GameStartModel.css'
import ColorHeader from './subComponents/ColorHeader'

export default function GameStartModel({setGameState,setShowGameModel,setPCTurn}) {
    function startANewGame() {
        setGameState(true)
        setShowGameModel(false)
        setPCTurn(true)
    }

    return (
        <div className={'game-start-model-background'}>
            <div className={'game-start-model'}>
                <ColorHeader headerText={'Ready to play?'} classNameFont={'architects-daughter-regular'} />
                <ColorHeader headerText={'Hit that START button!'} classNameHeader={'h3-header '} classNameFont={'monospace-regular'} />
                <p style={{ marginBottom: '50px' }}>Remember, Listen and Repeate.</p>
                <button className='submit-button' onClick={startANewGame}>START</button>
            </div>
        </div>
    )
}
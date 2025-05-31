import './componentCss/TopBar.css'
import Connect from './subComponents/Connect'
import InstructionsButton from './subComponents/InstructionsButton'
import MuteButton from './subComponents/MuteButton'

export default function TopBar({ muteStatus, setMuteStatus,setGameAlert,gameAlert,
    setShowInstructions, setShowPresenceModel, currentSignedInUser,setCurrentSignedInUser,gameState }) {

    return (
        <div className='top-bar'>
            <Connect
                setShowPresenceModel={setShowPresenceModel}
                currentSignedInUser={currentSignedInUser}
                setCurrentSignedInUser={setCurrentSignedInUser}
                gameState={gameState}
                setGameAlert={setGameAlert}
                gameAlert={gameAlert}

            />
            <div className='top-bar-divider'>
                <MuteButton
                    muteStatus={muteStatus}
                    setMuteStatus={setMuteStatus}
                />
                <InstructionsButton
                    setShowInstructions={setShowInstructions}
                />
            </div>
        </div>
    )
}
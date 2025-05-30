import './componentCss/TopBar.css'
import Connect from './subComponents/Connect'
import InstructionsButton from './subComponents/InstructionsButton'
import MuteButton from './subComponents/MuteButton'

export default function TopBar({ muteStatus, setMuteStatus,
    setShowInstructions, setShowPresenceModel, currentSignedInUser }) {

    return (
        <div className='top-bar'>
            <Connect
                setShowPresenceModel={setShowPresenceModel}
                currentSignedInUser={currentSignedInUser}
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
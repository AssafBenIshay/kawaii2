import '../components/componentCss/TopConsole.css'

export default function TopConsole({ setCurrentSignedInUser, currentSignedInUser }) {

    return (
        <div className={`top-console ${currentSignedInUser ? '' : 'inactive'}`}>
            <div className='top-console-button'>
                score
                <div className='top-console-button'>{currentSignedInUser ? currentSignedInUser.Score : 0}</div>
            </div>
            <div className='top-console-button'>
                stage<div className='top-console-button'>{currentSignedInUser ? currentSignedInUser.Stage : 0}</div>
            </div>
            <div className='top-console-button'>
                speed<div className='top-console-button'>{currentSignedInUser ? currentSignedInUser.Speed : 0}</div>
            </div>
            <div className='top-console-button'>
                high-score<div className='top-console-button'>{currentSignedInUser ? currentSignedInUser.Highscore : 0}</div>
            </div>
        </div>
    )
}
import './subComponentsCss/SubComponents.css'
import Instructions from '../../assets/svg/instructions.svg'
export default function InstructionsButton({ setShowInstructions }) {

    return (
        <div className={`top-bar-sub-container`} onClick={() => setShowInstructions(last => !last)}>
            <a className='center'> <img src={Instructions} className='icon-btn' /></a>
        </div>
    )
}
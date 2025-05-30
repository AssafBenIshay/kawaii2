import React from 'react'
import '../components/componentCss/Instructions.css'
import InstructionIcon from '../assets/svg/instructions.svg'
import ColorHeader from './subComponents/ColorHeader'

export default function Instructions({ showInstructions, setShowInstructions }) {
    const [headerText] = React.useState('How to play?')


    return (
        <div className='instructions-container' onClick={() => setShowInstructions(false)}>
            <section className='instructions-window'>
                <img src={InstructionIcon} />
                <div className='title'><ColorHeader headerText={headerText} /> </div>
                <p>❕ Just repeat the pattern being played without any mistake.</p>
                <p>🎾 Every 4 successful rounds your stage score will increment.</p>
                <p>🤦 When ever you fail, on the following game, you will be able to save a sequence of  4 sounds progress for each stage won.</p>
                <strong style={{ margin: '20px' }}>Now Go Kik Ass !</strong>
            </section>
        </div>
    )
}
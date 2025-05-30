import React from 'react'
import './componentCss/GameLostModel.css'

export default function GameLostModel({ currentSignedInUser,setShowGameLostModel,setCurrentSignedInUser}) {
    const [txt] = React.useState(Array.from("You lose!"))
    const [loserImage] = React.useState(['🤔', '😐', '😣', '😥', '😯', '😪', '😫', '😒', '😔', '😕', '😖',
        '😞', '😢', '😭', '😧', '😨', '😩', '😬', '😱', '😵', '😠', '🤬', '🥺', '💀'])
    
    function finalizeGame(){
        setCurrentSignedInUser({
            ...currentSignedInUser,
            Score: 0,
        })
        
        return setShowGameLostModel(last => !last)
    }

    return (
        <div className='game-lost-model-background'>
            <div className='game-lost-model'>
                <div className='title'>{
                    txt.map((letter, i) => (
                        <span
                            style={{ color:`rgb(${i*20},${i*20},${i*20})` }}
                            key={i}
                            className='pacifico-regular-enlarged span'
                        >{letter !== " " ? letter : <span>&nbsp;</span>}</span>
                    ))
                }
                </div>
                <h3 className='architects-daughter-regular'>Your current score is {currentSignedInUser.Score} points </h3>
                <section className='face-section'>{loserImage[Math.floor(Math.random()*loserImage.length)]}</section>
                <p className='architects-daughter-regular'>Better luck next time.</p>
                <button className='submit-button' onClick={finalizeGame}>OK</button>
            </div>
        </div>
    )
}
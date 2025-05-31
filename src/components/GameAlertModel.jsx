import React from 'react'
import '../components/subComponents/subComponentsCss/subComponents.css'
import ColorHeader from './subComponents/ColorHeader';

export default function GameAlertModel({setGameAlert,gameAlert}) {
    function alertCancelClickHandler() {
        setGameAlert({
            ...gameAlert,
            state:false,
        })
    }

    function alertOkClickHandler() {
        if (gameAlert.execute === "logOut") {
            //todo log out
            setGameAlert({
                ...gameAlert,
                finalize: "killGame",
                state:false,
            })

        } else if (gameAlert.execute === "changeUser") {
            //todo logout than signin
            setGameAlert({
                ...gameAlert,
                finalize: "replaceUser",
                state:false,
            })
        }
        
    }
    return (
        <div className='error-alert'>
            <div className='game-alert-window'>
                <ColorHeader headerText={gameAlert.message}/>
                {/* {errorMessage} */}
                <div className='btn-group '>
                    <button onClick={alertOkClickHandler} className='game-alert-btn'>OK</button>
                    <button onClick={alertCancelClickHandler} className='game-alert-btn'>Cancel</button>
                </div>
            </div>
        </div>
    )
}
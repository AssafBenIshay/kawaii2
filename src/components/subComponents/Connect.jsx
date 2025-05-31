import React from 'react';
import './subComponentsCss/SubComponents.css'


export default function Connect({ setShowPresenceModel, currentSignedInUser, setCurrentSignedInUser,
    gameState, setGameAlert ,gameAlert }) {


    function clickHandle() {

        if (currentSignedInUser === null) {
            //5 if no user is loged in the show presence login window
            return setShowPresenceModel(last => !last)
        } else {
            if (gameState) {
                setGameAlert({
                    ...gameAlert,
                    state: true,
                    message: "Do you wish to quit? ",
                    execute:'logOut'
                    
                })
            } else {
                setGameAlert({
                    ...gameAlert,
                    state: true,
                    message: "Do you want to logout?",
                    execute:'changeUser'
                })
            }
        }
    }

    return (
        <div className='top-bar-sub-container' onClick={clickHandle}>
            {currentSignedInUser ?
                <a> <img src={`https://robohash.org/${currentSignedInUser.Name}`} style={{ width: '50px' }} />  {currentSignedInUser.Name}</a> :
                <a style={{ fontWeight: '900' }}> Sign in</a>}

        </div>
    )
}
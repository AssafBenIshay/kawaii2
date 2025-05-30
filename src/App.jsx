import React from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Instructions from './components/Instructions'
import ColorHeader from './components/subComponents/ColorHeader'
import GameBoard from './components/GameBoard'
import TopConsole from './components/TopConsole'
import BottomConsole from './components/BottomConsole'
import PresenceModel from './components/PresenceModel'
import GameStartModel from './components/GameStartModel'
import GameLostModel from './components/GameLostModel'

import { Howler } from 'howler' //!! delete

export default function App() {
  const [showPresenceModel, setShowPresenceModel] = React.useState(false)
  const [muteStatus, setMuteStatus] = React.useState(true)
  const [showInstructions, setShowInstructions] = React.useState(false)
  //~--------------------------------------↑ TOP BAR VARIABLES ↑------------------------------------------------~//
  const [usersDb, setUsersDb] = React.useState('')

  React.useEffect(() => {
    var storedUsersDB = localStorage.getItem('KawaiiUsersDB')
    if (storedUsersDB === null) {
      console.log('no users db ');
      localStorage.setItem('KawaiiUsersDB', JSON.stringify({}))
    }
  }, [usersDb])
  //^-----------------------------------------◬ DB Initialization◬ ----------------------------------------------^//
  const [currentSignedInUser, setCurrentSignedInUser] = React.useState(null)
  // const [currentSignedInUser, setCurrentSignedInUser] = React.useState({//!Delete when finished
  //   "Id": 1747491462298,
  //   "Name": "Assaf",
  //   "Email": "ass@ass",
  //   "Password": "ass",
  //   "Score": 0,
  //   "Speed": 5,
  //   "Stage": 0,
  //   "Highscore": 0,
  // })
  //&-----------------------------------------⇈  SINGED IN User data Storage ⇈------------------------------------&//
  React.useEffect(() => {
    //console.log('ON LOAD LOG PRINT USING UseEffect::currentSignedInUser', currentSignedInUser);
    setMuteStatus(false) //!!! delete when finishing app
    Howler.mute(false) //!! delete
  }, [currentSignedInUser])
  //-------------------------------------------A informative section A----------------------------------------------//
  const [gameState, setGameState] = React.useState(false) // Sets if game is active or not
  const [PCTurn, setPCTurn] = React.useState(false)//Sets wether pc turn or not
  const [showGameModel, setShowGameModel] = React.useState(false)
  //?---------------------------------------↡↡ GAME VARIABLES ↡↡-----------------------------------------------------?//
  const [msBetweenSound, setMsBetweenSound] = React.useState(1000) //game speed
  const [showGameLostModel,setShowGameLostModel] = React.useState(false)

  //?---------------------------------------↟↟ GAME VARIABLES ↟↟-----------------------------------------------------?//

  return (
    <div className={'app'}>
      <TopBar
        muteStatus={muteStatus}
        setMuteStatus={setMuteStatus}
        setShowInstructions={setShowInstructions}
        setShowPresenceModel={setShowPresenceModel}
        currentSignedInUser={currentSignedInUser}
      />
      <ColorHeader headerText={'Kawaii'} classNameHeader={'h1-header'} />
      <ColorHeader headerText={'Cause Simon said so!'} classNameHeader={'h3-header'} />
      {showInstructions && <Instructions
        setShowInstructions={setShowInstructions}
        showInstructions={showInstructions}
      />}
      {showPresenceModel && <PresenceModel
        setShowPresenceModel={setShowPresenceModel}
        setCurrentSignedInUser={setCurrentSignedInUser}
        setMuteStatus={setMuteStatus}
      />}
      {showGameModel && <GameStartModel setGameState={setGameState} setShowGameModel={setShowGameModel}
        setPCTurn={setPCTurn}
      />}
      {showGameLostModel && <GameLostModel currentSignedInUser={currentSignedInUser} setShowGameLostModel={setShowGameLostModel}
        setCurrentSignedInUser={setCurrentSignedInUser}
      />}

      <section className='game-area'>
        <div className='game-area-top'></div>
        <div className='game-area-bottom'></div>
        //! used to update user data
        <TopConsole setCurrentSignedInUser={setCurrentSignedInUser} currentSignedInUser={currentSignedInUser}
        />
        <GameBoard setCurrentSignedInUser={setCurrentSignedInUser} currentSignedInUser={currentSignedInUser}
          setGameState={setGameState} gameState={gameState} PCTurn={PCTurn} setPCTurn={setPCTurn}
          msBetweenSound={msBetweenSound} setShowGameLostModel={setShowGameLostModel}
        />
        {currentSignedInUser && <BottomConsole setCurrentSignedInUser={setCurrentSignedInUser} currentSignedInUser={currentSignedInUser}
          setGameState={setGameState} gameState={gameState} PCTurn={PCTurn} setPCTurn={setPCTurn}
          setShowGameModel={setShowGameModel} muteStatus={muteStatus} setMsBetweenSound={setMsBetweenSound}
        />}
      </section>
    </div>
  )
}

//todo: signin Email: ass@ass Password:ass
//* 1: signIn signUp done loads and registers users
//* 2: usersDB from localestorage Initialization done
//* 3: soundEnable and Mute Button works
//* 4: instructions Button works!
//* 5: Sounds successfully connected to svg buttons
//^ 5: optional:: set user random Robot char from robot by name Char api

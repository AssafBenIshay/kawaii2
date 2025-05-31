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
import GameAlertModel from './components/GameAlertModel'

import { Howler } from 'howler' //!! delete

export default function App() {
  const [showPresenceModel, setShowPresenceModel] = React.useState(false)
  const [muteStatus, setMuteStatus] = React.useState(true)
  const [showInstructions, setShowInstructions] = React.useState(false)
  const [gameAlert, setGameAlert] = React.useState({ state: false, message: "", execute: null, finalize: null })
  //~______________________________________↑ TOP BAR VARIABLES ↑________________________________________________~//
  const [usersDb, setUsersDb] = React.useState('')

  React.useEffect(() => {
    var storedUsersDB = localStorage.getItem('KawaiiUsersDB')
    if (storedUsersDB === null) {
      localStorage.setItem('KawaiiUsersDB', JSON.stringify({}))
    }
  }, [usersDb])
  //^_________________________________________◬ DB Initialization◬ ______________________________________________^//
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
  //&ooooooooooooooooooooooooooooooooooooooooo⇈  SINGED IN User data Storage ⇈oooooooooooooooooooooooooooooooooooo&//
  const [gameState, setGameState] = React.useState(false) // Sets if game is active or not
  const [PCTurn, setPCTurn] = React.useState(false)//Sets wether pc turn or not
  const [showGameModel, setShowGameModel] = React.useState(false)
  //?xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx↡↡ GAME VARIABLES ↡↡xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?//
  const [msBetweenSound, setMsBetweenSound] = React.useState(1000) //game speed
  const [showGameLostModel, setShowGameLostModel] = React.useState(false)

  //?xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx↟↟ GAME VARIABLES ↟↟xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?//

  React.useEffect(() => {
    //console.log('ON LOAD LOG PRINT USING UseEffect::currentSignedInUser', currentSignedInUser);
    setMuteStatus(false) //!!! delete when finishing app
    Howler.mute(false) //!! delete

    if (gameAlert.finalize === 'killGame') {
      setCurrentSignedInUser(null)
      setGameState(false)
      setPCTurn(true)
      setGameAlert({
        execute: null,
        finalize: null,
        message: '',
        state: false
      })

    } else if (gameAlert.finalize === 'replaceUser') {
      setCurrentSignedInUser(null)
      setGameState(false)
      setPCTurn(false)
      setShowPresenceModel(true)
      setGameAlert({
        execute: null,
        finalize: null,
        message: '',
        state: false
      })

    }
  }, [setCurrentSignedInUser, gameAlert.execute, gameAlert.finalize])
  //&oooooooooooooooooooooooooooooooooooooooooooA informative section Aoooooooooooooooooooooooooooooooooooooooooooooo//
  return (
    <div className={'app'}>
      <TopBar
        gameState={gameState}
        muteStatus={muteStatus}
        setMuteStatus={setMuteStatus}
        setShowInstructions={setShowInstructions}
        setShowPresenceModel={setShowPresenceModel}
        currentSignedInUser={currentSignedInUser}
        setCurrentSignedInUser={setCurrentSignedInUser}
        setGameAlert={setGameAlert}
        gameAlert={gameAlert}
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
      {gameAlert.state && <GameAlertModel setGameAlert={setGameAlert} gameAlert={gameAlert} />}

    </div>
  )
}

//todo: signin Email: ass@ass Password:ass
//* 1: signIn signUp done loads and registers users
//* 2: usersDB from localestorage Initialization done
//* 3: soundEnable and Mute Button works
//* 4: instructions Button works!
//* 5: Sounds successfully connected to svg buttons
//* 6: optional:: set user random Robot char from robot by name Char api
//bug: disconect user from currentSignedInUser when user presses signin mid game
//error: after 1 round and fail when player starting new game all sounds cluster to big noise
//todo: bar meter for the amount of user correct clicks
//todo: an animation of fireworks
//error: fix the msBetweenSound initialization issue 
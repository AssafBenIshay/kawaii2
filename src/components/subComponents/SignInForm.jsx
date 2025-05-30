import React from 'react'
import './subComponentsCss/SubComponents.css'
import Applouse from '../../assets/sounds/applause-when-seccessful-registration.mp3'
import Fail from '../../assets/sounds/fail.mp3'
import { Howl, Howler } from 'howler'

export default function SignInForm({ userEmail, setUserEmail, userPassword, setUserPassword,
    setShowPresenceModel ,setCurrentSignedInUser,setMuteStatus}) {
    const [errorMessage, setErrorMessage] = React.useState('')
    const [applouse] = React.useState(new Howl({ src: Applouse, preload: true, volume: 0.5 }))
    const [fail] = React.useState(new Howl({src:Fail,preload:true,volume:0.6}))
    const emailRef = React.useRef(null)
    const passwordRef = React.useRef(null)

    function errorAlertClickHandler() {
        setErrorMessage('')
        
    }


    function handleEmailInput(e) {
        setUserEmail(e.target.value)
        if (e.target.value === "") {
            e.target.classList.add('input-error')
        } else
            if (e.target.classList[1] && e.target.value !== '') {
                e.target.classList.remove('input-error')
            }
    }
    function handlePasswordInput(e) {
        setUserPassword(e.target.value)
        if (e.target.value === "") {
            e.target.classList.add('input-error')
        } else
            if (e.target.classList[1] && e.target.value !== '') {
                e.target.classList.remove('input-error')
            }
    }

    function handleClick(e) {
        e.preventDefault()

        var KawaiiUsersDBCopy = JSON.parse(localStorage.getItem('KawaiiUsersDB'))
        var ParsedUsersDB = Object.values(KawaiiUsersDBCopy)

        if (ParsedUsersDB.length === 0) {
            fail.play()
            setErrorMessage('No such Email exists.')
            
        }

        ParsedUsersDB.forEach(userInDB => {
            if (userInDB.Email === userEmail) {
                if (userInDB.Password === userPassword) {
                    setCurrentSignedInUser(userInDB)
                    Howler.mute(false)
                    applouse.play()
                    setMuteStatus(false)
                    return setShowPresenceModel(false)
                    //* This is where user is being approved
                } else {
                    fail.play()
                    setErrorMessage('password is incorrect');
                    
                }
            } else {
                fail.play()
                setErrorMessage('Email is incorrect');
                
            }
        })
        
    }


    return (
        <form className='form'>
            <h3>Sign In</h3>
            <label className='label'>
                Email
                <input
                    className='input' type='email' onChange={(e) => handleEmailInput(e)}
                    ref={emailRef}
                    required
                    autoComplete='user-email'
                />
            </label>
            <label className='label'>
                Password
                <input
                    className='input' type='password' onChange={(e) => handlePasswordInput(e)}
                    ref={passwordRef}
                    required
                    autoComplete='user-password'
                />
            </label>
            <label className='label'>
                Submit
                <button className='submit-button' onClick={(e) => handleClick(e)}>Lets get started!</button>
            </label>
            {errorMessage && <div className='error-alert'>
                <div className='error-alert-window'>
                    {errorMessage}
                    <button onClick={errorAlertClickHandler} className='submit-button alert-button'>OK</button>
                </div>
            </div>}

        </form>
    )
}
import React from 'react'
import './subComponentsCss/SubComponents.css'

export default function SignUpForm({ userName, setUserName, userEmail, setUserEmail,
    userPassword, setUserPassword,  setUserPasswordValidate, setSignInToggle }) {
    const nameRef = React.useRef(null)
    const emailRef = React.useRef(null)
    const passwordRef = React.useRef(null)
    const passwordValidateRef = React.useRef(null)

    const [errorAlert, setErrorAlert] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('no errors')


    function handleClick(e) {
        e.preventDefault()

        if ((nameRef.current.value.trim() !== '') && (emailRef.current.value.trim() !== '') &&
            (passwordRef.current.value.trim() !== '') && (passwordValidateRef.current.value.trim() !== '') &&
            (passwordRef.current.value === passwordValidateRef.current.value) && (emailRef.current.value.includes('@') === true) &&
            (emailRef.current.value.startsWith('@') === false) && (emailRef.current.value.endsWith('@') === false)) {
            submitNewUserToLocalStorage()
        } else {
            setErrorMessage('Please fill all the fields correctly')
            setErrorAlert(true)
        }
    }

    function handleNameInput(e) {
        setUserName(e.target.value)
        if (e.target.value === "") {
            e.target.classList.add('input-error')
        }else
        if (e.target.classList[1] && e.target.value !== '') {
            e.target.classList.remove('input-error')
        }
    }

    function handleEmailInput(e) {
        setUserEmail(e.target.value)
        if (e.target.value === "") {
            e.target.classList.add('input-error')
        }else
        if (e.target.classList[1] && e.target.value !== '') {
            e.target.classList.remove('input-error')
        }
    }
    function handlePasswordInput(e) {
        setUserPassword(e.target.value)
        if (e.target.value === "") {
            e.target.classList.add('input-error')
        }else
        if (e.target.classList[1] && e.target.value !== '') {
            e.target.classList.remove('input-error')
        }
    }
    function handlePasswordValidateInput(e) {
        setUserPasswordValidate(e.target.value)
        if (e.target.value === "") {
            e.target.classList.add('input-error')
        }else
        if (e.target.classList[1] && e.target.value !== '') {
            e.target.classList.remove('input-error')
        }
    }


    function submitNewUserToLocalStorage() {
        const newUser = {
            'Name': `${userName}`,
            'Email': `${userEmail}`,
            'Password': `${userPassword}`,
            'Score': 0,
            'Speed': 5,
            'Stage': 1,
            'Highscore': 0,
        }
        var KawaiiUsersDBCopy = JSON.parse(localStorage.getItem('KawaiiUsersDB'))
        KawaiiUsersDBCopy[Date.now()] = newUser
        localStorage.setItem('KawaiiUsersDB', JSON.stringify(KawaiiUsersDBCopy))
        setSignInToggle(last => !last)
    }

    function errorAlertClickHandler() {
        setErrorAlert(false)
    }

    return (
        <form className='form'>
            <h3>Sign Up</h3>
            <label className='label'>
                Name
                <input
                    className='input' type='text' onChange={(e) => handleNameInput(e)}
                    ref={nameRef}
                    required
                    autoComplete='user-name'
                />
            </label>
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
                    name='current-password'
                    className='input' type='password' onChange={(e) => handlePasswordInput(e)}
                    ref={passwordRef}
                    required
                    autoComplete='user-password'
                />
            </label>
            <label className='label'>
                Repeate Password
                <input
                    name='validated-password'
                    className='input' type='password' onChange={(e) => handlePasswordValidateInput(e)}
                    ref={passwordValidateRef}
                    required
                    autoComplete='user-password-repeat'
                />
            </label>
            <label className='label'>
                Submit
                <button className='submit-button' onClick={(e) => handleClick(e)}>Lets get started!</button>
            </label>
            {errorAlert && <div className='error-alert'>
                <div className='error-alert-window'>
                    {errorMessage}
                    <button onClick={errorAlertClickHandler} className='submit-button alert-button'>OK</button>
                </div>
            </div>}
        </form>
    )
}
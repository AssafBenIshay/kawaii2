import React from 'react';
import './componentCss/PresenceModel.css';
import SignInForm from './subComponents/SignInForm';
import SignUpForm from './subComponents/SignUpForm';

export default function PresenceModel({setShowPresenceModel,setCurrentSignedInUser,setMuteStatus}) {
    const [signInToggle, setSignInToggle] = React.useState(true);
    const [userName, setUserName] = React.useState('')
    const [userEmail, setUserEmail] = React.useState('')
    const [userPassword, setUserPassword] = React.useState('')
    const [userPasswordValidate, setUserPasswordValidate] = React.useState('')

    function exitPresenceModel(e) {
        if (e.target.className !== 'presence-background') {
            return
        }
        return setShowPresenceModel(last => !last)
    }

    return (
        <div className='presence-background' onClick={(e)=>exitPresenceModel(e)}>
            <div className='presence-model'>
                <div
                    className='toggler-background'
                    style={{ justifyContent: `${signInToggle === true ? 'flex-start' : 'flex-end'}`, transition: '0.5s all ease' }}
                    onClick={() => setSignInToggle(!signInToggle)}>
                    <div className='toggler-button'></div>
                </div>
                {signInToggle?<SignInForm 
                    userEmail={userEmail}
                    setUserEmail={setUserEmail}
                    userPassword={userPassword}
                    setUserPassword={setUserPassword}
                    setShowPresenceModel={setShowPresenceModel}
                    setCurrentSignedInUser={setCurrentSignedInUser}
                    setMuteStatus={setMuteStatus}
                />:
                    <SignUpForm 
                    setSignInToggle={setSignInToggle}
                    userName={userName}
                    setUserName={setUserName}
                    userEmail={userEmail}
                    setUserEmail={setUserEmail}
                    userPassword={userPassword}
                    setUserPassword={setUserPassword}
                    userPasswordValidate={userPasswordValidate}
                    setUserPasswordValidate={setUserPasswordValidate}
                />}
            </div>
        </div>
    )
}
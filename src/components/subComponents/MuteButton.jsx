import './subComponentsCss/SubComponents.css'
import Mute from '../../assets/svg/mute.svg'
import SoundOn from '../../assets/svg/sound-on.svg'
import React from 'react'
import { Howl, Howler } from 'howler'

export default function MuteButton({ muteStatus, setMuteStatus }) {
    // const [audioContext, setAudioContext] = React.useState(null)

    function setMute() {
        if (muteStatus) {
            setMuteStatus(false)
            Howler.mute(false)
            Howler.volume(1)
        } else {
            setMuteStatus(true)
            Howler.mute(true)
            Howler.volume(0)
        }
    }

    React.useEffect(() => {
        Howler.mute(true)
        setMuteStatus(true)
    }, [])

    // React.useEffect(() => {
    //     var cntxt = new AudioContext()
    //     window.addEventListener('click', setSound)
    //     function setSound() {
    //         if (muteStatus === false) {
    //             cntxt.resume().then(() => {
    //                 setAudioContext(cntxt.state)
    //             })
    //         } else {
    //             cntxt.close().then(() => {
    //                 setAudioContext(cntxt.state)
    //             })
    //         }
    //     }

    //     return () => {
    //         window.removeEventListener('click',setSound)
    //     }

    // }, [audioContext])




    return (
        <div className={`top-bar-sub-container ${muteStatus ? 'wiggle-animate' : ''}`} onClick={setMute}>
            {muteStatus ? <a
                className='center'
            > <img src={Mute} className='icon-btn' /></a> : <a className='center'><img src={SoundOn} className='icon-btn' /></a>}
        </div>
    )
}
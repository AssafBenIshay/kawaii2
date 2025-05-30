import './subComponentsCss/SubComponents.css'

export default function Connect({ setShowPresenceModel,currentSignedInUser }) {
    
     return(
         <div className='top-bar-sub-container' onClick={()=> setShowPresenceModel(last =>!last)}>
             {currentSignedInUser?  <a> 👤  {currentSignedInUser.Name}</a> : <a> Sign in</a>}
         </div>
    )
}
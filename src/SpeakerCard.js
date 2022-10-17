import React from 'react'
import ImageSpeaker from './ImageSpeaker'
import Session from './Session'
import { data } from './data'

function SpeakerCard () {

  // useEffect(()=>{
  //   fe
  // })

  return (
    <div className='container'>
      {`./images/bw/speaker-`.map((image, index) => {
         return (
           <div>
             <ImageSpeaker {...image} key={index} />
           </div>
         )
       })}
      {data.sessions.map((session, index) => {
         return (
           <div className='sessions'>
             <Session {...session} key={index} />
           </div>
         )
       })}
    </div>
  )
}

export default SpeakerCard

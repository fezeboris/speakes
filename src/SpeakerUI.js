import React from 'react'
import { Link } from 'react-router-dom'

function SpeakerUI ({ id, first, last, company, bio, twitterHandle, sessions, sat}) {
  return (
    (
    // !sat && (
    <Link to={`/speakers/${id}`} state={{ speakerId: id }}>
    <div className='ui card'>
      <div className='image'>
        <img src={`./images/speaker-${id}.jpg`} alt='spekerImage' />
      </div>
      <div className='content'>
        <span className='header'>{first} {last}</span>
        <div className='description'>
          {bio}
        </div>
        <div className='ui divider'></div>
        <div className='meta'>
          <span><i className='user icon'></i> {twitterHandle}</span>
        </div>
        <div className='ui divider'></div>
        <span><i className='home icon'></i> {company}</span>
      </div>
      <div className='extra content'>
        <span><i className='bullhorn icon'></i> {sessions.length}</span>
      </div>
      <div className='extra content'>
        <span><i className='bullhorn icon'></i> {sat ? 'True' : 'False'}</span>
      </div>
    </div>
    </Link>
    )
  // )
  )
}

export default SpeakerUI

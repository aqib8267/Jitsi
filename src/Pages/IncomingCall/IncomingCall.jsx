import React from 'react'
import './IncomingCall.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import SwipeableButton from '../../Components/SwipeableButton/SwipeableButton';
import {useHistory} from 'react-router-dom'

const IncomingCall = () => {
  const history = useHistory();

  const onSuccess =()=> {
    // alert('Yay! Swipe Success');
    history.push('/jitsiMeet')
  }
  return (
    <div className='IncomingCall'>
      <div className="upper">
        <VideocamIcon />
        <span>incoming video call</span>
      </div>
      <div className="lower">
          <SwipeableButton onSuccess={onSuccess} color='#000000' text='Join the call' />
      </div>
    </div>
  )
}

export default IncomingCall

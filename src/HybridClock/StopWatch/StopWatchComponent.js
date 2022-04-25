import Button from '../Button'
import { useEffect, useState } from 'react'
import './stopWatchComponent.css'

export default function StopWatchComponent({sendData}) {

  return (
    <div className='stopWatchComponent' >
      <div  >
          <h1> StopWatch </h1>
          
          <div className='circle' >
            <div className='displayTimer' >
              <span className='timerSpan' > {sendData.hours} : {sendData.minutes} : {sendData.seconds} </span>
            </div>
            <div className='Btns'>
            {sendData.showStart ? <Button click = {sendData.startTimer} name = "Start" /> : null}
            {sendData.showStop ? <Button click = {sendData.stopTimer} name = "Stop" /> : null } 
            </div>
          </div>

      </div>
       
       <div className='resetBtn' >
          <Button click = {sendData.resetTimer} name = "Reset" />
       </div>
    </div>
  )
}


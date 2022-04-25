import React from 'react'
import Button from './Button'
import ClockComponent from './Clock/ClockComponent'
import StopWatchComponent from './StopWatch/StopWatchComponent'
import './hybridClock.css'
import { useState } from 'react'

export default function HybridClock() {
 
  const [showClock,setShowClock] = useState(true);
  const [showStopWatch,setShowWatch] = useState(false)
  
  const showClockFun = () => {
      setShowClock(true);
      setShowWatch(false)
  } 
  const showStopWatchFun = () => {
      setShowWatch(true);
      setShowClock(false)
  }
  

  return (
    <div className='hybridClock'>
        <div>
           <div className='clockComponent' >
               {showClock? <ClockComponent /> : null}
           </div>
               {showStopWatch ?  <StopWatchComponent /> : null}
        </div>

        <div className='hybridBtns' >
            <div className= {showClock ? "active" :'clockBtn'} >
               <Button click = {showClockFun} name = "clock" />
            </div>
            <div className= {showStopWatch ? "active" : "stopwatchBtn"}>
               <Button click = {showStopWatchFun} name = "stopwatch" />
            </div>
        </div>
    </div>
  )
}

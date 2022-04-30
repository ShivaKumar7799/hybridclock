import React from 'react'
import Button from './Button'
import ClockComponent from './Clock/ClockComponent'
import StopWatchComponent from './StopWatch/StopWatchComponent'
import './hybridClock.css'
import { useState } from 'react'

export default function HybridClock() {
 
  const [showClock,setShowClock] = useState(true);
  const [showStopWatch,setShowWatch] = useState(false)

  const [count,setCount] = useState(null);
  const [timerId,setTimerId] = useState(null);
  const [milliSeconds,setMilliSeconds] = useState("00");
  const [seconds,setSeconds] = useState("00");
  const [minutes,setMinutes] = useState("00");
//  const [hours,setHours] = useState("00");
  const [showStart,setShowStart] = useState(true);
  const [showStop,setShowStop] = useState(false);
  let getCount = count;

const startTimer = () => {
    setShowStop(true);
    setShowStart(false)
    console.log("start");
    setTimerId( setInterval( () => {
        console.log("timerTriggerd");
        setCount((prev) => ( getCount = (prev + 1) ) );
        setMilliSeconds(  ( (getCount + 1) % 60 ) < 10 ? "0" +  ( (getCount + 1) % 60 ) :  ( (getCount + 1) % 60 )   );
        setSeconds( (parseInt((getCount + 1)/60) % 60) <10 ? "0" + (parseInt((getCount + 1)/60) % 60) : (parseInt((getCount + 1)/60) % 60)    );
        setMinutes( parseInt((getCount + 1) / 3600)< 10 ? "0" + parseInt((getCount + 1) / 3600) : parseInt((getCount + 1) / 3600)  )
    } , 10)   )
   
}
const stopTimer = () => {
    setShowStart(true);
    setShowStop(false)
    console.log("stop");
    setTimerId(clearInterval(timerId));
}

const resetTimer = () => {
    console.log('reset');
    setTimerId(clearInterval(timerId));
    setCount(0);
    setMilliSeconds("00")
    setSeconds("00");
    setMinutes("00");
   // setHours("00");
    setShowStart(true);
    setShowStop(false)
}

  const showClockFun = () => {
      setShowClock(true);
      setShowWatch(false)
  } 
  const showStopWatchFun = () => {
      setShowWatch(true);
      setShowClock(false)
  }
  
  const data = {
    milliSeconds : milliSeconds,
    //hours : hours,
    minutes : minutes,
    seconds : seconds,
    startTimer : startTimer,
    stopTimer : stopTimer,
    resetTimer : resetTimer,
    showStart : showStart,
    showStop : showStop
  }

  return (
    <div className='hybridClock'>
        <div>
           <div className='clockComponent' >
               {showClock? <ClockComponent /> : null}
           </div>
               {showStopWatch ?  <StopWatchComponent sendData = {data} /> : null}
        </div>

        <div className='hybridBtns' >
            <div className= {showClock ? "activeClock" :'clockBtn'} >
               <Button click = {showClockFun} name = "clock" />
            </div>
            <div className= {showStopWatch ? "activeStopWatch" : "stopwatchBtn"}>
               <Button click = {showStopWatchFun} name = "stopwatch" />
            </div>
        </div>
    </div>
  )
}



// hours = {hours} minutes = {minutes} seconds = {seconds} startTimer = {startTimer} stopTimer = {stopTimer} resetTimer = {resetTimer} showStart = {showStart} showStop = {showStop}
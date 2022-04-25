import React from 'react'
import Button from '../Button'
import { useState } from 'react'
import './stopWatchComponent.css'

export default function StopWatchComponent() {

    const [count,setCount] = useState(0);
    const [timerId,setTimerId] = useState(null);
    const [seconds,setSeconds] = useState("00");
    const [minutes,setMinutes] = useState("00");
    const [hours,setHours] = useState("00");
    let getCount = 0;
    const [showStart,setShowStart] = useState(true)
    const [showStop,setShowStop] = useState(false)

  const startTimer = () => {
      setShowStop(true);
      setShowStart(false)
      console.log("start");
      setTimerId( setInterval( () => {
          console.log("timerTriggerd");
          setCount((prev) => ( getCount = (prev + 1) ) );
          console.log(getCount);
          setSeconds(  ( (getCount + 1) % 60 ) < 10 ? "0" +  ( (getCount + 1) % 60 ) :  ( (getCount + 1) % 60 )   );
          setMinutes( (parseInt((getCount + 1)/60) % 60) <10 ? "0" + (parseInt((getCount + 1)/60) % 60) : (parseInt((getCount + 1)/60) % 60)    );
          setHours( parseInt((getCount + 1) / 3600)< 10 ? "0" + parseInt((getCount + 1) / 3600) : parseInt((getCount + 1) / 3600)  )
      } , 1000)   )
     
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
      setSeconds("00");
      setMinutes("00");
      setHours("00");
  }
  return (
    <div className='stopWatchComponent' >
      <div  >
          <h1> StopWatch </h1>
          
          <div className='circle' >
            <div className='displayTimer' >
              <span className='timerSpan' > {hours} : {minutes} : {seconds} </span>
            </div>
            <div className='Btns'>
            {showStart ? <Button click = {startTimer} name = "Start" /> : null}
            {showStop ? <Button click = {stopTimer} name = "Stop" /> : null } 
            </div>
          </div>

      </div>
       
       <div className='resetBtn' >
          <Button click = {resetTimer} name = "Reset" />
       </div>
    </div>
  )
}

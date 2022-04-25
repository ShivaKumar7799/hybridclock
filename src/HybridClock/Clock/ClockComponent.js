import React, { useEffect } from 'react'
import { useState } from 'react'
import './clockComponent.css'

export default function ClockComponent() {
 
  const [hours,setHours] = useState(null);
  const [minutes,setMinutes] = useState(null);
  const [Meridiem,setMeridium] = useState(null);

  let getHours = 0;

  useEffect( 
    () => {
      setInterval( ()=>{
        const date = new Date();
        getHours = (date.getHours()) < 10 ? "0" + date.getHours() : date.getHours();
        setHours( getHours <=12 ? getHours : ((getHours % 13 ) + 1 < 10) ? "0" + ((getHours % 13 ) + 1) : null )  ;
        setMinutes((date.getMinutes()) < 10 ? "0" + date.getMinutes() : date.getMinutes() );
        setMeridium( getHours < 12 ? "A.M" : "P.M"    )
   }  , 1000)
    }
        ,[])

  return (
    <div className='classComponent' >
       <h2> Clock </h2>
       <span className='time'> {hours} : {minutes}  {Meridiem} </span>
    </div>
  )
}

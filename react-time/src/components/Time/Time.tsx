import { useState, useEffect } from 'react'
//import Time from './Time.ts'
import moment, { utc } from 'moment';

type Props = {
    onTime: (time: ITime) => void;
    direction: number;
}

const Time = ({onTime, direction}: Props) => {
    const [time, setTime] = useState<ITime>({
        hours: 0, 
        minutes: 0, 
        seconds: 0,
    });

    useEffect(() => {
        const showTime = setInterval(() => getTime(), 1000);
        return () => {clearInterval(showTime); }
    });
    
    function getTime() {
        const currentDate = moment().utcOffset(direction)
            .format('HH:mm:ss').split(':')
            .map(item => parseInt(item, 10));

        setTime({
            hours: currentDate[0], 
            minutes: currentDate[1], 
            seconds: currentDate[2]
        })

        const seconds = time.seconds;
        const minutes = time.minutes;
        const hours = time.hours;
        const timeNow: ITime = {
            seconds: seconds,
            minutes: minutes,
            hours: hours,
        };
        onTime(timeNow)
    }

  return ( 
    <>
        {/* <h2>{PN(time.hours)}:{PN(time.minutes)}:{PN(time.seconds)}</h2> */}
        <line>UTC: {direction}</line>
    </>
  )
}

export default Time
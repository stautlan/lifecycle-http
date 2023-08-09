import { useState } from 'react'
import Time from './Time/Time'
//import ButtonLog from './ButtonLog/ButtonLog';
//import ButonChangeTime from './ButonChangeTime/ButonChangeTime';
import AnalogTime from './AnalogTime/AnalogTime';
import moment, { utc } from 'moment'

type Props = {
    UTC: number;
    city: string;
    deleteHandler: (city: string) => void;
}

const TimeComponent = ({UTC, city, deleteHandler}: Props) => {
    const [time, setTime] = useState<ITime>({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [analogTime, setAnalogTime] = useState<ITime>({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    function handleTime(time: ITime) {
        setTime(time);
        const analog = {
            seconds: time.seconds / 60,
            minutes: time.minutes / 60,
            hours: time.hours / 12,
        }
        setAnalogTime(analog);
    }

    function PN(value: number) { // parse number
        if (value < 10) {
            return '0' + value;
        } else {
            return String(value)
        }
    }

    function onRemove(value: string) {
        deleteHandler(value)
    }

  return (
    <div className='clock-time'>
        <header className='clock-header'>
            <h2>{city}</h2>
            <h2>{PN(time.hours)}:{PN(time.minutes)}:{PN(time.seconds)}</h2>
            <Time
                onTime={handleTime}
                direction={UTC}
            />
            <button className='clock-remove'
                onClick={() => onRemove(city)}>x</button>
            <AnalogTime
                secondRatio={analogTime.seconds}
                minuteRatio={analogTime.minutes}
                hourRatio={analogTime.hours}
            />
        </header>
    </div>
  )
}

export default TimeComponent
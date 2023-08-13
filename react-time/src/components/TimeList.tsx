import React, {useState} from 'react'
import TimeComponent from './TimeComponent'

import { TimeZones } from '../data/data'
import ComboUTCTime from './ComboUTCTime';

interface Clock {
  utc: number;
  city: string;
}

const clockStore: Clock[] = [
  { utc: 1, city: 'Лондон' },
  { utc: 2, city: 'Берлин' },
  { utc: 3, city: 'Москва' },
  { utc: 9.5, city: 'Papua' },
]

const TimeList = () => {
  const [clocks, setClocks] = useState(clockStore)
  const [zoneUTC, setZoneUTC] = useState('')
  const [nameCity, setNameCity] = useState('')

  const removeHandler = (city: string) => {
    setClocks(prevCity => { 
      return prevCity.filter(it => it.city !== city);
    })
  }

  function handlerAddCity(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    var isNumber = parseFloat(zoneUTC);
    if (isNaN(isNumber) || !nameCity) {
      setZoneUTC('0');
      return;
    };
    if (clocks.find(it => it.city === nameCity)) {
      return;
    }

    setClocks(prevClocks => {
      const newClock = {
        utc: parseFloat(zoneUTC), //parseInt(zoneUTC.substring(4)),
        city: nameCity
      };
      return [...prevClocks, newClock];
    })
  }

  function handlerCity({target: {value} } : React.ChangeEvent<HTMLInputElement>): void {
    setNameCity(value);
  }

  function handlerZoneUTC({target: {value}}: React.ChangeEvent<HTMLInputElement>): void {
    setZoneUTC(value);
  } 

  return (
    <>
      <form onSubmit={handlerAddCity} className='panel-clock'>
        <line className='input'>Название: </line>
        <input className='input input-name' 
          id='city'
          placeholder='Название города'
          value={nameCity}
          onChange={handlerCity}
        />
        <line className='input'>Временная зона: </line>
        <input type='search' className='input input-timezone' 
          id='zone'
          placeholder='Вставьте число'
          typeof='number'
          value={zoneUTC}
          max={12}
          min={-12}
          maxLength={5}
          onChange={handlerZoneUTC}
        />
        <ComboUTCTime onChange={setZoneUTC} />
        <button className='input'>Вставить</button>
      </form>
      {clocks.map((item, index) => 
        <div className='clocks' key={index}>
          <TimeComponent 
            UTC={item.utc} 
            city={item.city} 
            deleteHandler={removeHandler} />
        </div>
      )}
      
    </>
  )
}

export default TimeList
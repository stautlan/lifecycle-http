import React from 'react'
import { BUTTON_LOG } from '../utils/constants.ts'

type Props = {time: ITime}

const ButtonLog = ({time}: Props) => {
    function hadnleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        //throw new Error('Function not implemented.')
        console.log(`${time.hours}:${time.minutes}:${time.seconds}`)
    }

  return (
    <button className='app-button' onClick={hadnleClick}>{BUTTON_LOG}</button>
  )
}

export default ButtonLog
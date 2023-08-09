import React from 'react'
import { BUTTON_CHG_DIRECTION } from '../utils/constants'

type Props = { changeTime: () => void; }

const ButonChangeTime = ({changeTime}: Props) => {
    function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        //throw new Error('Function not implemented.')
        changeTime();
    }

  return (
    <button className='app_button' onClick={handleClick}>{BUTTON_CHG_DIRECTION}</button>
  )
}

export default ButonChangeTime